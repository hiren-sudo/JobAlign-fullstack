import csv
import json
import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# Setup Selenium (headless mode for speed)
def setup_driver():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    return webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Find careers page from company website
def find_careers_page(company_url):
    try:
        response = requests.get(company_url, timeout=10)
        soup = BeautifulSoup(response.text, "html.parser")
        
        for link in soup.find_all("a", href=True):
            href = link["href"].lower()
            if "career" in href or "jobs" in href or "work-with-us" in href:
                if href.startswith("http"):
                    return href
                else:
                    return company_url.rstrip("/") + "/" + href.lstrip("/")
    except Exception as e:
        print(f"Error finding careers page for {company_url}: {e}")
    return None

# Scrape job titles from careers page
def scrape_jobs(careers_url, driver):
    jobs = []
    try:
        driver.get(careers_url)
        time.sleep(3)  # Allow time for JavaScript to load
        soup = BeautifulSoup(driver.page_source, "html.parser")
        
        for job in soup.find_all("a"):  # Look for links containing job postings
            text = job.get_text(strip=True)
            if text and any(keyword in text.lower() for keyword in ["engineer", "developer", "analyst", "manager", "intern"]):
                jobs.append(text)
    except Exception as e:
        print(f"Error scraping jobs from {careers_url}: {e}")
    return jobs

# Main function
def job_scraper(csv_file):
    results = []
    driver = setup_driver()
    
    with open(csv_file, "r") as file:
        reader = csv.reader(file)
        next(reader)  # Skip header
        for row in reader:
            company_url = row[0].strip()
            careers_url = find_careers_page(company_url)
            if careers_url:
                jobs = scrape_jobs(careers_url, driver)
                results.append({"company_website": company_url, "careers_page": careers_url, "job_titles": jobs})
            else:
                results.append({"company_website": company_url, "careers_page": "Not Found", "job_titles": []})
    
    driver.quit()
    
    with open("job_listings.json", "w", encoding="utf-8") as json_file:
        json.dump(results, json_file, indent=4, ensure_ascii=False)
    
    print("Job scraping completed. Results saved to job_listings.json")

# Run the scraper
job_scraper("companies.csv")
