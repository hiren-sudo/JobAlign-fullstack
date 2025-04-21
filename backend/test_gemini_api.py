# test_gemini_api.py
import google.generativeai as genai
import json

# Replace with your actual API key
genai.configure(api_key="AIzaSyB5dMz3iG3wFgIqkRVj2f3BiMz7nm6U0v4")

# Test the API call with the original prompt
prompt = """
Generate two JSON lists:
- "skills": A list of 100 job-related skills across all industries.
- "degrees": A list of 50 academic degrees worldwide.
Return only valid JSON format.
"""
try:
    model = genai.GenerativeModel("gemini-1.5-pro-latest")
    response = model.generate_content(prompt)
    # Print the raw response to debug
    print("Raw response:")
    print(response.text)
    # Attempt to parse the response as JSON
    data = json.loads(response.text)
    print("Parsed JSON:")
    print(data)
except json.JSONDecodeError as e:
    print(f"JSON parsing error: {e}")
    print("The response is not valid JSON. See raw response above.")
except Exception as e:
    print(f"Error: {e}")