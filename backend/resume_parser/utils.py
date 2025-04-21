import re
import pdfminer.high_level
import docx
import nltk

nltk.download('punkt')

def extract_text_from_pdf(pdf_path):
    try:
        return pdfminer.high_level.extract_text(pdf_path)
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return ""

def extract_text_from_docx(docx_path):
    try:
        doc = docx.Document(docx_path)
        return "\n".join([para.text for para in doc.paragraphs])
    except Exception as e:
        print(f"Error reading DOCX: {e}")
        return ""

def clean_and_tokenize_text(text):
    text = re.sub(r'\s+', ' ', text)  # Remove extra whitespaces
    tokens = nltk.word_tokenize(text)
    return tokens
