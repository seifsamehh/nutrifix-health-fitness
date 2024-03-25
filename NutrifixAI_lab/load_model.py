from langchain_google_genai.chat_models import ChatGoogleGenerativeAI
from langchain_community.chat_models import ChatOllama

def load_gemini(temperature=0.3):
    llm = ChatGoogleGenerativeAI(model='gemini-pro', temperature=temperature)
    return llm

def load_mistral(temperature=0.3):
    llm = ChatOllama(model='mistral', temperature=temperature)
    return llm