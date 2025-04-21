import requests
from bs4 import BeautifulSoup
import time
from .models import JobListing

def scrape_company_jobs(company_name, careers_url):
    """
    Scrape job listings from a company's careers page and save them to the database.
    Args:
        company_name (str): Name of the company (e.g., "TechCorp").
        careers_url (str): URL of the careers page (e.g., "https://example.com/careers").
    Returns:
        int: Number of new job listings added.
    """
    headers = {
        'User-Agent': 'JobAlignBot/1.0 (+https://jobalign.com/contact)',
    }
    
    try:
        # Fetch the careers page
        response = requests.get(careers_url, headers=headers, timeout=10)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching {careers_url}: {e}")
        return 0

    # Parse the HTML
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find job listings (adjust selectors based on the website's structure)
    job_listings = soup.find_all('div', class_='job-listing')  # Hypothetical class name
    new_listings = 0

    for job in job_listings:
        title = job.find('h2', class_='job-title').text.strip() if job.find('h2', class_='job-title') else 'N/A'
        location = job.find('span', class_='job-location').text.strip() if job.find('span', class_='job-location') else 'N/A'
        description = job.find('p', class_='job-description').text.strip() if job.find('p', class_='job-description') else 'N/A'
        skills = job.find('div', class_='job-skills').text.strip() if job.find('div', class_='job-skills') else 'N/A'

        # Check for duplicates before saving
        if not JobListing.objects.filter(title=title, company=company_name, location=location).exists():
            JobListing.objects.create(
                title=title,
                company=company_name,
                location=location,
                description=description,
                required_skills=skills,
                source=careers_url
            )
            new_listings += 1

    # Add a delay to avoid overloading the server
    time.sleep(2)
    return new_listings