from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser


def workout_plan_gen(age:int, weight:int, height:int, my_goals:str, fitness_level:str, days:int, hours:int, helth_cosnd:str, routine:str, llm)->str:
    
    passed_dict = {
        'age':age,
        'height':height,
        'weight': weight,
        'my_goals':my_goals,
        'fitness_level':fitness_level,
        'days':days,
        'hours':hours,
        'helth_cosnd':helth_cosnd,
        'routine': routine,
    }
    
    prompt = ChatPromptTemplate.from_template("""You are a Professional Fitness Trainer:

Generate a workout plan with diversity and creative exercises customized to the client information.

Client Information:
* Age: {age}
* Height: {height}
* Weight: {weight}                                                                                                                                                           
* My Goals: I'm looking to {my_goals}
* Fitness Level: {fitness_level}.
* Available Equipment: I have access to a gym with various equipment.
* Time Commitment: I'm dedicated to working out {days} days a week, and I have {hours} hours a day I can spend during each session.
* Health Considerations: I'm in the {helth_cosnd}.
* Preferred Routine: I like to follow {routine} routine.""")
    
    output_parser = StrOutputParser()
    
    chain = prompt | llm | output_parser
    
    workout_plan = chain.invoke(passed_dict)
    
    return workout_plan