import streamlit as st
from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from data_utilites import *
from load_model import load_gemini, load_mistral
from workout_plan_generation import workout_plan_gen
from diet_plan_generator import diet_generator
 
load_dotenv('1.env')

llm = load_gemini()

st.set_page_config(page_title='NutrifixAI', page_icon="🥗")

with st.sidebar:

        st.title('NutrifixAI Lab🌿')
        st.info("Transform Your Body, Transform Your Life!..")
        choice = st.radio("Navigation", ["Workout Plan", 'Diet Plan'])


if choice == 'Workout Plan':
     
     st.title('Workout Plan Generator🏋️')
     
     age = st.slider('Age',16, 80)
     weight = st.slider('Weight', 40, 200)
     height = st.slider('Height', 140, 220)
     my_goals = st.text_input('Your Goals')
     fitness_level = st.radio('Fitness Level', fitness_level_list)
     days = st.slider('Days', 1, 7)
     hours = st.slider('Hours', 1, 5)
     health_consd = st.radio('Health Considaration', health_consd_list)
     routine = st.radio('Routine', routine_list)
     
     if age and weight and height and my_goals and fitness_level and days and hours and health_consd and routine:

        if st.button('Generate'):

            workout_plan = workout_plan_gen(age, weight, height, my_goals, fitness_level, days, hours, health_consd, routine, llm)

            st.markdown(workout_plan)

     
elif choice == 'Diet Plan':

    st.title('Plan Diet Generator🍔')

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

    if age and height and weight and gender and activity_level and medical_condition and allergie and medication and fitness_goal and stress_level and sleep_pattern and smoker and alchool and confirm=='Yes':

        if st.button('Genreate'):

            diet_plan = diet_generator(age, height, weight, gender, activity_level, medical_condition, allergie, medication, fitness_goal, stress_level, sleep_pattern, smoker, alchool, llm)
            st.markdown(diet_plan)
