import streamlit as st  # Importing the Streamlit library for creating web apps
from dotenv import load_dotenv, find_dotenv  # Importing the dotenv library for loading environment variables
from langchain_google_genai import ChatGoogleGenerativeAI  # Importing the ChatGoogleGenerativeAI module for Google's GENAI API
from langchain_community.llms import Ollama  # Importing the Ollama module for OpenAI's GPT-3
from langchain.prompts import ChatPromptTemplate  # Importing the ChatPromptTemplate module for creating chat prompts
from langchain.schema.output_parser import StrOutputParser  # Importing the StrOutputParser module for parsing string outputs

# List of activity levels
activity_levels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active']

# Information about each activity level
activity_infos = [
    'Little to no exercise or physical activity in a typical day, primarily sedentary lifestyle (e.g., desk job, minimal walking)',
    'Light exercise or activity 1-3 days per week (e.g., light walking, office job with occasional movement)',
    'Moderately Active: Moderate exercise or activity 3-5 days per week (e.g., regular workouts, active lifestyle with moderate movement)',
    'Very Active: Intense exercise or activity 6-7 days per week (e.g., heavy workouts, physically demanding job, regular sports participation)',
    'Extremely Active: Strenuous exercise or activity most days of the week, coupled with a highly active job or lifestyle (e.g., intense training, professional athlete, physically demanding occupation)'
]

# List of boolean options
bool_option = ['Yes', 'No']

# List of medical conditions
medical_conditions = ['Diabetes', 'Hypertension (High Blood Pressure)', 'Heart Disease', 'Celiac Disease (Gluten Intolerance)', 'Irritable Bowel Syndrome (IBS)', "None", "Other"]

# List of allergies
allergies = ['Gluten', 'Lactose', 'Nuts', 'Shellfish', 'Soy', 'None', 'Other']

# List of fitness goals
fitness_goals = ['Lose Weight', 'Maintain Weight', 'Muscle Gain', 'Endurance Improvement', 'Overall Health Maintenance', 'Flexibility and Mobilit']

# List of stress levels
stress_levels = ['Low', 'Moderate', 'High', 'Very High', 'Not Sure/Varies']

# List of sleep patterns
sleep_patterns = ['Excellent', 'Good', 'Fair', 'Poor', 'Varied']

# Information about each sleep pattern
sleep_infos = ['Consistently getting 7-9 hours of high-quality sleep each night',
              'Generally getting 6-8 hours of sleep most nights with occasional disturbances.',
              'Experiencing occasional difficulty falling asleep or staying asleep, averaging around 5-7 hours of sleep per night.',
              'Frequently experiencing sleep disturbances or insomnia, resulting in less than 5 hours of sleep per night on average.',
              'Sleep patterns vary significantly from night to night, making it difficult to establish a consistent sleep schedule.']

# List of smoker types
smoker_list = ['Non-smoker', 'Occasional-smoker', 'Regular Smoker', 'Former Smoker', 'Heavy Smoker']

# List of alcoholic drinker types
alcholic_list = ['Non-drinker', 'Occasional drinker', 'Moderate drinker', 'Regular drinker', 'Heavy drinker']


# Function to load environment variables from the '1.env' file
def load_env():
    load_dotenv('1.env')

# Function to load the ChatGoogleGenerativeAI model with specific parameters
def load_gemini():
    llm = ChatGoogleGenerativeAI(model='gemini-pro', temperature=0.3)
    return llm

# Function to load the Ollama model with specific parameters
def load_llama2():
    llm = Ollama(Ollama(model='llama2', temperature=0.3))
    return llm

# Function to generate a diet plan based on the provided client information
def diet_generator(age:float, height:float, weight:float, gender:str, activity_level:str, medical_condition:str, allergie:str, medication:str, fitness_goal:str, stress_level:str, sleep_pattern:str, smoker:str, alchool:str, llm) -> str:
    
     # Get the index of the activity level and retrieve the corresponding activity info
    idx = activity_levels.index(activity_level)
    activity_info = activity_infos[idx]
    
    # Get the index of the sleep pattern and retrieve the corresponding sleep info
    idx2 = sleep_patterns.index(sleep_pattern)
    sleep_info = sleep_infos[idx]
    
    # Create a dictionary of passed client information
    passed_dict = {
        'age':age,
        'height':height,
        'weight':weight,
        'gender':gender,
        'activity_level':activity_level,
        'activity_info': activity_info,
        'medical_condition':medical_condition,
        'allergie':allergie,
        'medication':medication,
        'fitness_goal':fitness_goal,
        'stress_level': stress_level,
        'sleep_pattern': sleep_pattern,
        'sleep_info' : sleep_info,
        'smoker': smoker,
        'alchool': alchool
    }
    
    # Define the chat prompt template for generating the diet plan
    prompt = ChatPromptTemplate.from_template("""You are a Professional Nutritionist who providing diet plan over the whole week.
Provide a comprehensive and customized diet plan Based on the following client information delimited by triple backticls:
```
Client's information:

 - Age: {age}
 - Height: {height} cm
 - Weight: {weight} kg
 - gender: {gender}
 - activity level is {activity_level} which {activity_info}
 - {medical_condition}
 - {allergie}
 - {medication}
 - Fitness Goal is to {fitness_goal}
 - Stress Level is {stress_level}
 - My sleep pattern is {sleep_pattern} which is {sleep_info}
 - Client is {smoker}
 - Regarding Alchool Client is {alchool}
```

Your task is to generate comperhinsive 7 days diet plan according to the client's information.
""")
    
    # Define the output parser for parsing the generated diet plan
    output_parser = StrOutputParser()
    
    # Create a chain of prompt, language model, and output parser for generating the diet plan
    chain = prompt | llm | output_parser
    
    # Generate the diet plan using the passed client information
    diet_plan = chain.invoke(passed_dict)
    
    return diet_plan
 # Load environment variables
load_env()

# Set the page configuration for the Streamlit app
st.set_page_config(page_title='NutriGenie', page_icon="🥗")

# Set the title of the Streamlit app
st.title('Plan Diet Generator🍔')

# Load the GEMini language model
llm = load_gemini()

# Get user inputs for age, height, weight, gender, activity level, medical conditions, allergies, medication, fitness goal, stress level, sleep pattern, smoking, alcohol consumption, and confirmation
age = st.slider('Age', value=30, min_value=15, max_value=80)
height = st.slider('Height', value=170, min_value=140, max_value=210)
weight = st.slider('Weight', value=70, min_value=40, max_value=150)
gender = st.radio('Gender', ["Male", "Female"])
activity_level = st.radio('Activity Level', activity_levels)
medical_condition = st.radio('Medical Conditions', medical_conditions)
if medical_condition == 'None':
    medical_condition = "I don't Have any medical conditions"
else:
    medical_condition = 'Medical Conditions Client has ' + medical_condition

allergie = st.radio('Allergies', allergies)
if allergie == 'None':
    allergie = "I don't have any Allergies or Food Intolerances"
else:
    allergie = 'Allergies or Food Intolerances of the Client is ' + allergie
medication = st.text_input('Medication')
fitness_goal = st.radio('Fitness Goal', fitness_goals)
stress_level = st.radio('Stress Level', stress_levels)
sleep_pattern = st.radio('Sleep Pattern', sleep_patterns)
smoker = st.radio('Smoking', smoker_list)
alchool = st.radio('Alcholic', alcholic_list)
confirm = st.radio('Confirm?', ['Yes', 'No'])

# Check if all required inputs are provided and the user has confirmed
if age and height and weight and gender and activity_level and medical_condition and allergie and medication and fitness_goal and stress_level and sleep_pattern and smoker and alchool and confirm=='Yes':

    # Generate the diet plan if the user clicks the "Generate" button
    if st.button('Genreate'):
        diet_plan = diet_generator(age, height, weight, gender, activity_level, medical_condition, allergie, medication, fitness_goal, stress_level, sleep_pattern, smoker, alchool, llm)
        st.markdown(diet_plan)
