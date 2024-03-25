from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

def workout_plan_gen(my_goals:str, fitness_level:str, days:int, hours:int, helth_cosnd:str, routine:str, llm, language='En')->str: 

    """
        Generates a Gym Workout Plan based on user's goal, fiteness_level, days and hours avaliable, his routine and health considiration.

        Parameters:
        
            my_goals (str): Trainee Goal from the Gym Workout.
            fitness_level (str): Level of the trainee Fitness.
            days (int): Avaliable Days.
            hours (int): Avaliable Hours.
            helth_cosnd (str): Health Considiration.
            routine (str): Trainee Routine.
            language (str): the language of the generated content (optional, default value is 'EN').

        Returns:
            workout_plan (str): Generated Workout Plan.
    
    """
    
    if language == 'En':
        
        workout_plan_prompt = f"""Generate a workout plan with diversity and creative exercises.
    Please note the following details:
    * My Goals: I'm looking to {my_goals}
    * Fitness Level: {fitness_level}.
    * Available Equipment: I have access to a gym with various equipment.
    * Time Commitment: I'm dedicated to working out {days} days a week, and I have {hours} hours a day I can spend during each session.
    * Health Considerations: I'm in the {helth_cosnd}.
    * Preferred Routine: I like to follow {routine} routine.\nWorkout Plan:"""
        workout_plan_promptTemp = PromptTemplate(
        input_variables=["text_input"],
        template="You are a Professional Fitness Trainer:\n{text_input}")
        
    elif language == 'Ar':
        
        workout_plan_prompt = f"""قم بإنشاء خطة تمارين رياضية متنوعة ومبتكرة.
يرجى مراعاة التفاصيل التالية:
* أهدافي: أنا أسعى لـ {my_goals}.
* مستوى اللياقة: {fitness_level}.
* المعدات المتاحة: لدي الوصول إلى صالة ألعاب رياضية بها معدات متنوعة.
* الالتزام الزمني: أنا ملتزم بممارسة التمارين {days} أيام في الأسبوع، ولدي {hours} ساعة يوميًا يمكنني قضائها خلال كل جلسة.
* اعتبارات الصحة: أنا في حالة {helth_cosnd}.
* الروتين المفضل: أحب اتباع الروتين {routine}.\nخطة التمارين:"""
        
        workout_plan_promptTemp = PromptTemplate(
        input_variables=["text_input"],
        template="أنت مدرب لياقة مهني:\n{text_input}")
        
        
    workout_plan_extraction_chain = LLMChain(llm=llm, prompt=workout_plan_promptTemp)
    workout_plan = workout_plan_extraction_chain.run(workout_plan_prompt)
    
    return workout_plan