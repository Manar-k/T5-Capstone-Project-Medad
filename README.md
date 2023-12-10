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

We evaluated the OCR model by testing it using a set of 250 images. The results of the CER Character Error rate:



| Font Type | Character Error rate |
| --- | --- |
| Thuluth | 83.50% |
| Ruq’ah  | 43.50% |
| Naskh   | 24.70% |
| Kufic   | 19.30% |
| Diwani  | 50.50% |

