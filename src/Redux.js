import { createStore } from "redux";

const initialState = {
	loading: true,
	loading_time: 1500,
	dark_theme: false,
	language: "en",
	dictionary: {
		pl: {
			about_me: "O mnie",
			exams: "Egzaminy",
			skills: "Umiejętności",
			projects: "Projekty",
			books: "Ksiązki",
			courses: "Kursy",
			resume: "Cv",
			contact: "Kontakt",
			about_me: "Kim jestem",
			about_me_text: "Jestem programistą po technikum informatycznym. Ukończyłem pierwszy rok informatyki dziennej na Politechnice Śląskiej lecz z powodu małej ilości przedmiotów związanych z programowaniem postanowiłem uczyć się na własną rękę i znaleźć prace. Moim celem jest zostanie Full-Stack Developerem. Potrafię tworzyć responsywne aplikacje internetowe. Głównie używam Reacta z Reduxem ale uczę się też Typescriptu oraz Node.js. Jestem otwarty na oferty pracy oraz stażu.",
			exams: "Wyniki egzaminów",
			math: "Matematyka podstawowa",
			extended_math: "Matematyka rozszerzona",
			english: "Angielski",
			extended_english: "Angielski rozszerzony",
			spoken_english: "Angielski ustny",
			e12_theory: "E12 teoria",
			e12_practic: "E12 Praktyka",
			e13_theory: "E13 teoria",
			e13_practic: "E13 Praktyka",
			e14_theory: "E14 teoria",
			e14_practic: "E14 Praktyka",
			readed_books: "Przeczytane ksiązki",
			ml_stanford: "Kurs tłumaczy Machine Learning od podstaw stawiając duży nacisk na wyjaśnienie jak ML naprawdę działa. Poruszane są tam takie tematy jak Linear Regression, Logistic Regression, Neural Network, Unsupervised Learning i wiele innych zaawansowanych tematów związanych z Machine Learningiem.",
			cs_harvard: "Kurs jest wprowadzeniem do programowania. Głównym językiem używanym w kursie jest język c ale pojawia się tam także chociażby Python a wraz z nim Flask.",
			rc_ziroll: "Kurs wprowadzający do Reacta, przedstawia takie zagadnienia jak props,states, renderowanie warunkowe, kontrolowane inputy, przechwytywanie danych z API i wiele innych.",
			rc_smilga: "Kurs Reacta przedstawiający nowoczesne zagadnienia aktualnie używane w projektach takie jak Hooks, Context API, React Router, Custom Hooks itd.",
			redux_mosh: "Kurs przedstawiający podstawowe zagadnienia związane z Reduxem."
		},
		en: {
			about_me: "About me",
			exams: "Exams",
			skills: "Skills",
			projects: "Projects",
			books: "Books",
			courses: "Courses",
			resume: "Resume",
			contact: "Contact",
			about_me: "About me",
			about_me_text: "I am a programmer who has finished the first year of IT study at the Silesian University of Technology. Because of a small number of subjects related to programming, I decided to learn by myself and look for a job opportunity as a Front-end / FullStack Web Developer. By now I have learned how to create responsive websites with React, Redux, and SASS, currently, I am learning Typescript and Node.js",
			exams: "Exams results",
			math: "Math",
			extended_math: "Extended math",
			english: "English",
			extended_english: "Extended English",
			spoken_english: "Spoken English",
			e12_theory: "E12 Theory",
			e12_practic: "E12 Practice",
			e13_theory: "E13 Theory",
			e13_practic: "E13 Practice",
			e14_theory: "E14 Theory",
			e14_practic: "E14 Practice",
			readed_books: "Readed books",
			ml_stanford: "The course explains Machine Learning from scratch with a strong emphasis on explaining how ML really works. Topics such as Linear Regression, Logistic Regression, Neural Network, Unsupervised Learning and many other advanced Machine Learning topics are covered there.",
			cs_harvard: "The course is an introduction to programming. The main language used in the course is c, but there is also for example Python and Flask with it.",
			rc_ziroll: "The introductory course on React. It covers topics such as props, states, conditional rendering, controlled inputs, API data capture and many more.",
			rc_smilga: "React course presenting modern topics currently used in projects such as Hooks, Context API, React Router, Custom Hooks etc.",
			redux_mosh: "The course presents the basic issues related to Redux."
		}
	}
}

export const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, { type, payload }) {
	switch (type) {
		case 'TOGGLE_LOADING':
			return {
				...state,
				loading: payload
			};
		case 'TOGGLE_THEME':
			return {
				...state,
				dark_theme: !state.dark_theme
			}
		case 'SET_LANGUAGE':
			return {
				...state,
				language: payload
			}
		default:
			return state;
	}
}
export const toggleLoading = set_to => ({
	type: 'TOGGLE_LOADING',
	payload: set_to
})
export const toggleTheme = set_to => ({
	type: 'TOGGLE_THEME',
	payload: set_to
})

export const setLanguage = set_to => ({
	type: 'SET_LANGUAGE',
	payload: set_to
})