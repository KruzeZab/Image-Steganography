# Image Steganography

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cool project that hides information which can be text, image or video inside a cover image. The secret information is hidden in a way that it not visible to the human eyes.

# Table of Contents

1. [Introduction](#introduction)
2. [A Brief History](#history)
3. [Understanding Image Steganography](#understanding-image-steganography)
4. [Usage](#usage)
5. [Technology Stack](#technology-stack)
6. [LICENSE](#license)

## Introduction

Image steganography is a technique that involves hiding secret data or information within an image. It is a form of data hiding that is often used for security or privacy purposes, as it allows sensitive information to be transmitted without drawing attention to it.

## A brief history <a name="history"></a>

Steganography has been with us for ages, be it the spies in the Revolutionary War writing in invisible ink or Da Vinci embedding a secret meaning in a painting. Steganography traces its roots back to 500 BC. The first physical case of steganography is found in Histories by Herodotus, where he talks about the Greek leader Histiaeus’ act. Histiaeus was stuck in an enemy camp and was in dire need of sending a message to his camp. He then resorted to shaving a trusted slave’s head, tattooing a secret message on his scalp, letting his hair grow, and then sending him off to be shaved again by the message’s recipient

On the other end of the timeline, steganography is also being used recently. It is expected to be in use in the forthcoming years. For example, it was used very recently to drop malware into user’s computers, by sending them innocent-looking messages but hiding the malware within, using steganography techniques.

## Understanding Image Steganography <a name="understanding-image-steganography"></a>

Before diving into steganography, it is important to understand pixels and colour models. A pixel is the smallest building of an image and the colours in any pixel are (assume RGB) a function of the combination of proportions of red, green, and blue. So a pixel with a value of 0, 0, and 1 would mean 0 parts of red, 0 parts of green and 1 part of blue; in essence, this would turn out to be a blue pixel. In the case of an 8-bit system, a pixel can accommodate up to 8 digits (zeros or ones), and the largest number that could be represented in 8 digits is 11111111 which would be 255, and the smallest number that could be represented in 8 digits, would be 00000000 which would be 0. So any pixel in an 8-bit scenario could accommodate anything between 0 to 255 as a value for each of the colours. Now let’s say a random 8-bit grid has 3 pixels and each pixel having the below values for R, G, and B.

| | The Proportion of Red (r) | The Proportion of Green (G) | The Proportion of Blue (B) |
| Pixel 1 | 00101101 | 00011100 | 11011100 |
| Pixel 2 | 10100110 | 11000100 | 00001100 |
| Pixel 3 | 11010010 | 10101101 | 01100011 |

And if we want to house a secret number 200, we get the binary value of that number, i.e, 11001000. and use each digit of that number to replace the least significant digit (mostly the last digit) of our pixel grid, indicated in bold red font. The new colour scheme would be as below:

| | The Proportion of Red (r) | The Proportion of Green (G) | The Proportion of Blue (B) |
| Pixel 1 | 0010110<strong>1</strong> | 00011100 | 11011100 |
| Pixel 2 | 1010011<strong>0</strong> | 1100010<strong>1</strong> | 0000110<strong>0</strong> |
| Pixel 3 | 1101001<strong>0</strong> | 1010110<strong>0</strong> | 01100011 |

## Usage <a name="usage"></a>

To setup the project locally, follow the steps below:

1. Clone the repository

```bash
git clone <repository_url>
```

2. Install the dependencies

```bash
npm install
pip install -r requirements.txt
```

3. Run the development server

```bash
npm run dev
python manage.py runserver
```

## Technology Stack <a name="technology-stack"></a>

This project is built using React and Python (Django Rest Framework). React is used to build the user interface, providing an interactive and responsive experience for users. The Django REST Framework is used to create a RESTful API that allows the front-end and back-end to communicate seamlessly, exchanging data and information as needed.

## LICENSE <a name="license"></a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
