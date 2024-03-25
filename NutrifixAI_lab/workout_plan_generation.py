# Import necessary modules from langchain package
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# Define a function to generate a gym workout plan based on user inputs
def workout_plan_gen(my_goals:str, fitness_level:str, days:int, hours:int, helth_cosnd:str, routine:str, llm, language='En')->str: 

    """
    Generates a Gym Workout Plan based on user's goal, fitness_level, days and hours available, routine, and health consideration.

    Parameters:
        
        my_goals (str): Trainee Goal from the Gym Workout.
        fitness_level (str): Level of the trainee Fitness.
        days (int): Available Days.
        hours (int): Available Hours.
        helth_cosnd (str): Health Consideration.
        routine (str): Trainee Routine.
        language (str): the language of the generated content (optional, default value is 'EN').

    Returns:
        workout_plan (str): Generated Workout Plan.
    
    """
    
    # Check the language to determine the workout plan prompt
    if language == 'En':
        
        # English workout plan prompt
        workout_plan_prompt = f"""Generate a workout plan with diversity and creative exercises.
    Please note the following details:
    * My Goals: I'm looking to {my_goals}
    * Fitness Level: {fitness_level}.
    * Available Equipment: I have access to a gym with various equipment.
    * Time Commitment: I'm dedicated to working out {days} days a week, and I have {hours} hours a day I can spend during each session.
    * Health Considerations: I'm in the {helth_cosnd}.
    * Preferred Routine: I like to follow {routine} routine.\nWorkout Plan:"""
        
        # Define a PromptTemplate for the English language
        workout_plan_promptTemp = PromptTemplate(
        input_variables=["text_input"],
        template="You are a Professional Fitness Trainer:\n{text_input}")
        
    elif language == 'Ar':
        
        # Arabic workout plan prompt
        workout_plan_prompt = f"""قم بإنشاء خطة تمارين رياضية متنوعة ومبتكرة.
يرجى مراعاة التفاصيل التالية:
* أهدافي: أنا أسعى لـ {my_goals}.
* مستوى اللياقة: {fitness_level}.
* المعدات المتاحة: لدي الوصول إلى صالة ألعاب رياضية بها معدات متنوعة.
* الالتزام الزمني: أنا ملتزم بممارسة التمارين {days} أيام في الأسبوع، ولدي {hours} ساعة يوميًا يمكنني قضائها خلال كل جلسة.
* اعتبارات الصحة: أنا في حالة {helth_cosnd}.
* الروتين المفضل: أحب اتباع الروتين {routine}.\nخطة التمارين:"""
        
        # Define a PromptTemplate for the Arabic language
        workout_plan_promptTemp = PromptTemplate(
        input_variables=["text_input"],
        template="أنت مدرب لياقة مهني:\n{text_input}")
        
    # Create an LLMChain object for generating the workout plan
    workout_plan_extraction_chain = LLMChain(llm=llm, prompt=workout_plan_promptTemp)
    
    # Generate the workout plan using the LLMChain
    workout_plan = workout_plan_extraction_chain.run(workout_plan_prompt)
    
    return workout_plan
