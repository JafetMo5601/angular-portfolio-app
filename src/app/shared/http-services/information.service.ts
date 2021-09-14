import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class InformationService {

    //   getAll(): Observable<any> {
    //     return this.http.get<any>(environment.apiUrl + 'appointments/all', httpOptions);
    //   }

    //   retrieveAppointment(id: string): Observable<any> {
    //     return this.http.get<any>(environment.apiUrl + `appointments/${id}`, httpOptions);
    //   }


    quote: string = 'What excites me the most is how the technology can take us to new places.';
    // Create an algorithm to divide the quote in 3 (45%, 30%, 25%)

    projects: object[] = [
        {
            url: '#',
            name: 'TS&A',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        },
        {
            url: '#',
            name: 'Hola',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        },
        {
            url: '#',
            name: 'TS&A',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        },
        {
            url: '#',
            name: 'TS&A',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        },
        {
            url: '#',
            name: 'TS&A',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        },
        {
            url: '#',
            name: 'TS&A',
            description: 'Web app that consume some Azure Cognitive Services as the API in order to provide an translator, that is capable to convert text to speech and run apect-based analysis.',
            tools: [
                'Flask for Back-End development',
                'Azure Cognitive Servces',
                'JQuery/ and Ajax.',
                'HTML5/CSS3'
            ]
        }
    ];

    about = {
        about: 'Hi there! <br>I am <span>Jafet</span> Mora, a young Software Developer with a high interest in learn, build and share experiences. Generally I enjoy discovering technologies and new things from which I can learn, interact with, and of course have a good time creating code. <br>You can know a little more about me by scrolling down. <br><br> I hope you enjoy it. :)',
        resume_path: '#'
    };

    awards: object[] = [
        {
            title: 'Expo-Engineering 1',
            description: 'Awarded by MEP for classify and participate in the Costa Rica National Expo-Engineering in November 2018 and November 2019'
        },
        {
            title: 'Expo-Engineering 2',
            description: 'Awarded by MEP for classify and participate in the Costa Rica National Expo-Engineering in November 2018 and November 2019'
        },
        {
            title: 'Expo-Engineering 3',
            description: 'Awarded by MEP for classify and participate in the Costa Rica National Expo-Engineering in November 2018 and November 2019'
        },
        {
            title: 'Expo-Engineering 4',
            description: 'Awarded by MEP for classify and participate in the Costa Rica National Expo-Engineering in November 2018 and November 2019'
        }
    ]

    info = {
        phone: '+506 71445897',
        email: 'jafet.moraugalde15@gmail.com',
        address: 'San Antonio, Alajuela, Costa Rica 20104'
    }

    social_media = {
        facebook: 'https://www.facebook.com/jafet.moraugalde/',
        instagram: 'https://www.facebook.com/jafet.moraugalde/',
        github: 'https://www.facebook.com/jafet.moraugalde/',
        linkedin: 'https://www.facebook.com/jafet.moraugalde/'
    }

}