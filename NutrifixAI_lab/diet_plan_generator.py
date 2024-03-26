from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from data_utilites import activity_infos, activity_levels, sleep_patterns, sleep_infos

def diet_generator(age:float, height:float, weight:float, gender:str, activity_level:str, medical_condition:str, allergie:str, medication:str, fitness_goal:str, stress_level:str, sleep_pattern:str, smoker:str, alchool:str, llm) -> str:
    
    idx = activity_levels.index(activity_level)
    activity_info = activity_infos[idx]
            
    idx2 = sleep_patterns.index(sleep_pattern)
    sleep_info = sleep_infos[idx]
    
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
    
    output_parser = StrOutputParser()
    
    chain = prompt | llm | output_parser
    
    diet_plan = chain.invoke(passed_dict)
    
    return diet_plan
 