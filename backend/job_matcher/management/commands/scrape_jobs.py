from django.core.management.base import BaseCommand
from job_matcher.scraper import scrape_company_jobs

class Command(BaseCommand):
    help = 'Scrape job listings from company websites and save them to the database.'

    def handle(self, *args, **options):
        # List of companies and their careers pages
        companies = [
            {'name': 'eSparkBiz', 'url': 'https://www.esparkinfo.com/about/career'},
            # Add more companies here
        ]

        total_new_listings = 0
        for company in companies:
            self.stdout.write(f"Scraping jobs from {company['name']}...")
            new_listings = scrape_company_jobs(company['name'], company['url'])
            total_new_listings += new_listings
            self.stdout.write(f"Added {new_listings} new job listings from {company['name']}.")

        self.stdout.write(self.style.SUCCESS(f"Finished scraping. Added {total_new_listings} new job listings."))