import { createStore } from "redux";

const initialState = {
	loading: true,
	loading_time: 1500,
	dark_theme: false,
	dictionary: {
		pl: {
			about_me: "O mnie",
			exams: "Egzaminy",
			skills: "Umiejętności",
			projects: "Projekty",
			books: "Ksiązki",
			resume: "Cv",
			contact: "Kontakt",
			about_me: "Kim jestem",
			about_me_text: "Jestem początkującym Web Developerem po technikum informatycznym. Przez rok studiowałem informatykę dzienną na Politechnice Śląskiej lecz zrezygnowałem gdyż studia nie pokryły się z moimi zainteresowaniami. Planuje zostać Front-end lub Full-stack Developerem. Aktualnie głównie uczę się Reacta z Reduxem ale w planach mam także opanowanie Node.js oraz Typescript. Opanowałem także podstawy machine learningu i gdyby była taka możliwość interesuje mnie rozwój także w tym kierunku.",
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
			clean_code: "Czysty kod",
			clean_code_description: "książka pokazuje czym powinien charakteryzować się czysty kod i jak go pisać.",
			software_craftsman: "software Craftsman",
			software_craftsman_description: "Książka ta proponuje czysto rzemieślnicze podejście do pracy programisty. Idea ta, znana jako software craftsmanship, zakłada kompletną zmianę sposobu myślenia o programowaniu. Priorytetami stają się tu profesjonalizm, techniczna perfekcja i zadowolenie klienta, a osiąga się to, stosując pewne praktyki programistyczne, które zaczerpnięto m.in. z metodyk programowania ekstremalnego, zwinnego i odchudzonego.",
			responsive_web_design_description: "Responsive Web Design",
			responsive_web_design_description: "Książka uczy jak tworzyć responsywne strony internetowe dostosowane do każdych urządzeń."
		},
		en: {
			about_me: "About me",
			exams: "Exams",
			skills: "Skills",
			projects: "Projects",
			books: "Books",
			resume: "Resume",
			contact: "Contact",
			about_me: "About me",
			about_me_text: "I am a Web Developer after an IT technical college. For a year I studied computer science at the Silesian University of Technology,  then quit because it did not coincide with my interests. I plan to become a Front-end or Full-stack Developer. Currently, I am mainly learning React with Redux, but I also plan to master Node.js and Typescript. I also mastered the basics of machine learning and if there was such a possibility, I am interested in developing also in this direction.",
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
			clean_code: "Clean code",
			clean_code_description: "Clean code is about what is and how to write clean code.",
			software_craftsman: "software Craftsman",
			software_craftsman_description: "Książka ta proponuje czysto rzemieślnicze podejście do pracy programisty. Idea ta, znana jako software craftsmanship, zakłada kompletną zmianę sposobu myślenia o programowaniu. Priorytetami stają się tu profesjonalizm, techniczna perfekcja i zadowolenie klienta, a osiąga się to, stosując pewne praktyki programistyczne, które zaczerpnięto m.in. z metodyk programowania ekstremalnego, zwinnego i odchudzonego.",
			responsive_web_design_description: "Responsive Web Design",
			responsive_web_design_description: "Książka uczy jak tworzyć responsywne strony internetowe dostosowane do każdych urządzeń."
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
		default:
			return state;
	}
}
export const toggleLoading = (set_to) => ({
	type: 'TOGGLE_LOADING',
	payload: set_to
})
export const toggleTheme = (set_to) => ({
	type: 'TOGGLE_THEME',
	payload: set_to
})