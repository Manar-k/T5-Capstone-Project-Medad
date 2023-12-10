<p align="center">
 <img width="500" src="https://github.com/Manar-k/T5-Capstone-Project-Medad/assets/79855806/8c0d0b11-4105-46e6-8464-bb6cd82ab434" alt="Medad logo">
</p>

# T5-Capstone-Project-Medad
Capstone Project Medad “مِداد” from the Data Science and Artificial Intelligence T5 Bootcamp.

Medad 🖋️✨is a website that aims to promote the culture of the Arabic language and spread the history and aesthetics of Arabic calligraphy. It targets those interested in the culture of the Arabic language, Arabic calligraphy arts, and amateurs. Medad offers several artificial intelligence services, which are:
- Font Classification 
- Arabic OCR (Extract Text from Image)
- Spelling Checker 
- Change Text Font

Medad contributes to achieving one of the goals of the Kingdom of Saudi Arabia’s Vision 2030 (Caring for the Arabic Language), which calls for consolidating and strengthening values, spreading the Arabic language, and caring for and taking pride in it.

- Team Members:
 1 - Rawan Almoghamis
 2 - Manar Khamees
 3 - Sara Albogami
 4 - Asma Ali
 5 - Taghreed A

## Font Classification
The font classification dataset is created from Almotanabi Poems and organized as a set of 20,000 images, 4000 for each labeled with one of five Arabic script types
- Thuluth
- Ruq’ah
- Naskh
- Kufic
- Diwani

We evaluated the font classification model by testing it using the validation set of 20%. The results of validation loss: 0.1195% and the validation accuracy: 86%.

## Arabic OCR
The OCR dataset is created from Almotanabi Poems and organized as a set of 840 images, 168 for each labeled with one of five Arabic script types
- Thuluth
- Ruq’ah
- Naskh
- Kufic
- Diwani

We evaluated the OCR model by testing it using a set of 250 images. The results of the CER Character Error Rate:

| Font Type | Character Error Rate |
| --- | --- |
| Thuluth | 83.50% |
| Ruq’ah  | 43.50% |
| Naskh   | 24.70% |
| Kufic   | 19.30% |
| Diwani  | 50.50% |

## Deployment (Medad Website)
We deploy our model using Flask, a web application framework written in Python and consisting of HTML, CSS, JS, and Utils - Python functions code.
The web application consists of three sections: font classification, optical character recognition, changing the font of regular text to another Arabic font, and spelling correction, and the website will be available in both Arabic and English.

## Demo
https://github.com/Manar-k/T5-Capstone-Project-Medad/assets/79855806/cf32c5e7-385c-43db-aaa4-81a88652d5ca

## Tools
<p align="center">
 <img width="900" src="https://github.com/Manar-k/T5-Capstone-Project-Medad/assets/79855806/b613fed9-f4cf-4fb2-802c-37de4f4e8b2b" alt="Medad Tools">
</p>
