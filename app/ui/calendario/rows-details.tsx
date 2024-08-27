import ModalidadStream from "./modalidad-stream";
import ModalidadPresencial from "./modalidad-presencial";
import ModalidadFeriado from "./modalidad-feriado";
import ModalidadVirtual from "./modalidad-virtual";
import { getSheetData } from "../../api/googleSheets";

const clases_diapositivas = [
    "https://docs.google.com/presentation/d/1zrOqeeOyucCVuej2t1nmGFft-xQNBhLMuiJnTSVQnwQ/edit?usp=drive_link", // 1
    "https://docs.google.com/presentation/d/1Svufb4eW9yXK3wyeklDMO6ddB6vzU_uhGUsZMMkJlKQ/edit?usp=share_link", // 2
    "https://docs.google.com/presentation/d/1mvGP6vZh2aLd8voOdUd-X0PQX4fiiIc9XhVkwQGmTSc/edit?usp=share_link", // 3
    "https://docs.google.com/presentation/d/1j7FlHrVbBDnzxMikSDkcjCAOSc7WgAPnD1CUa_wBEDc/edit?usp=drive_link", // 4
    "",
    "",
    "https://docs.google.com/presentation/d/1g9s7gULE_edliGFuizlUpg6DNH2ou_POHdiUH_Qv2qA/edit?usp=share_link", // 5
    "https://docs.google.com/presentation/d/1EAK0dXwhYJpUFt8RaHcluX9IwvyS8-A4xpcqNggmbug/edit?usp=sharing", // 6
    "https://docs.google.com/presentation/d/1lUj9AXzIvDfngeUnuWWiEdLzqaWaHgZNyWThd9YsSO0/edit?usp=share_link", // 7
    "https://docs.google.com/presentation/d/1OwojI9z1xMlrUGCUVPgVOzJn0WlJ7eWS7vX_EWElH6Q/edit?usp=share_link", // 8
    "https://docs.google.com/presentation/d/1-uY0XCYSqrvVqta4cOynbU5jzNk7qH-Hy5ZTwdGt6I0/edit?usp=share_link", // 9
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

"https://docs.google.com/presentation/d/1zrOqeeOyucCVuej2t1nmGFft-xQNBhLMuiJnTSVQnwQ/edit?usp=drive_link".split(',');

// "https://docs.google.com/presentation/d/1zrOqeeOyucCVuej2t1nmGFft-xQNBhLMuiJnTSVQnwQ/edit?usp=drive_link, https://docs.google.com/presentation/d/1Svufb4eW9yXK3wyeklDMO6ddB6vzU_uhGUsZMMkJlKQ/edit?usp=drive_link, https://docs.google.com/presentation/d/1mvGP6vZh2aLd8voOdUd-X0PQX4fiiIc9XhVkwQGmTSc/edit?usp=drive_link, https://docs.google.com/presentation/d/1j7FlHrVbBDnzxMikSDkcjCAOSc7WgAPnD1CUa_wBEDc/edit?usp=drive_link, https://docs.google.com/presentation/d/1g9s7gULE_edliGFuizlUpg6DNH2ou_POHdiUH_Qv2qA/edit?usp=drive_link, https://docs.google.com/presentation/d/1VReIz3UMY71363_LMQ7vlwor_LB77xB-dj1FkytxWVU/edit?usp=drive_link, https://docs.google.com/presentation/d/1824zTNT1UMFDNs9P1zTUq2NhhljtEyRM30eczNmGNrY/edit?usp=drive_link, https://docs.google.com/presentation/d/1EAK0dXwhYJpUFt8RaHcluX9IwvyS8-A4xpcqNggmbug/edit?usp=drive_link, https://docs.google.com/presentation/d/1lUj9AXzIvDfngeUnuWWiEdLzqaWaHgZNyWThd9YsSO0/edit?usp=drive_link, https://docs.google.com/presentation/d/1OwojI9z1xMlrUGCUVPgVOzJn0WlJ7eWS7vX_EWElH6Q/edit?usp=drive_link, https://docs.google.com/presentation/d/1-uY0XCYSqrvVqta4cOynbU5jzNk7qH-Hy5ZTwdGt6I0/edit?usp=drive_link, https://docs.google.com/presentation/d/1G01kViDKMLN8ZO8sGQTZQjI7WIgsl0HJBx9vg3QLq9M/edit?usp=drive_link, https://docs.google.com/presentation/d/1P6lnjl93PkmoQLB6anGUu3AGseov4007ldI7vesoZnI/edit?usp=drive_link, https://docs.google.com/presentation/d/14EtR30k0Qb5tiUZggxk6fU3FuVO3d8P0y7p5wEmfF38/edit?usp=drive_link, https://docs.google.com/presentation/d/1hanSFqFQTxs_xjR8AdaIS1JoAYa_aR0pdOHJyfAFmjI/edit?usp=drive_link, https://docs.google.com/presentation/d/1z-kIjJRTWH7p4ekoIHRVk-4IAAPexkFXJS5nedwWGh8/edit?usp=drive_link, https://docs.google.com/presentation/d/1wRijYMCrD2llTuBDTqpRVlHgAa0_-odPqwUOPilaAJs/edit?usp=drive_link, https://docs.google.com/presentation/d/1yxp6_NH0DZtkPiPVGJNO2jKcj6S0W4bYwCvbhM8OxSg/edit?usp=drive_link, https://docs.google.com/presentation/d/1oR5IznaLxsgg9RywgX7x55FrP_eyOOxOzAieD79-JE8/edit?usp=drive_link, https://docs.google.com/presentation/d/1Q-lohSqbYPFRMAcc0Hl_XV-PlcliIrchd0mTXOe-tJE/edit?usp=drive_link, https://docs.google.com/presentation/d/1FQwqKXap3aasOGueH8QBOlkbf5WUtwM8el0gaK59O6I/edit?usp=drive_link, https://docs.google.com/presentation/d/1AeC7Z7u3QzhMu694cIVr8-xcnpOQB6l7OthyvxKr6F0/edit?usp=drive_link, https://docs.google.com/presentation/d/1IlL8JHiofLyoYBfog-gSF3X5nX27rd7QHxG-CqE72q4/edit?usp=drive_link, https://docs.google.com/presentation/d/1sQaO7LgALiEk4OfKi52IH6loRlJUwLRGkvOWahyczbI/edit?usp=drive_link, https://docs.google.com/presentation/d/1NKfOz6g6CW38JBgl2m_-Mkwy0WEIgCDUSkeoy1n1tz0/edit?usp=drive_link, https://docs.google.com/presentation/d/1qt2sYBUjDAS1q_Tz2HcCskLLYjl1aq0LptjcR20h0tY/edit?usp=drive_link, https://docs.google.com/presentation/d/1OIfjBCGXhoIhc9PcEj0cBvmFbwOL0FAaBfirNCM1Onc/edit?usp=drive_link, https://docs.google.com/presentation/d/1Gs1S_cwKKwcDyxRkz2y_PSKd3CbJ_2UDhJi_OX85eRI/edit?usp=drive_link, https://docs.google.com/presentation/d/1XKn59td8U9488tjDHgKP5W-EYGvLqY8HoMJjc3PEgLY/edit?usp=drive_link, https://docs.google.com/presentation/d/1s9X_ppJTzas-aAojW3BDDow8HQCSvijLbMSrM7hHQaY/edit?usp=drive_link, https://docs.google.com/presentation/d/1qCDC6HMHDBf1hhZ8Xqe0PNnfNHmvgmj_jWG5fmgMLL8/edit?usp=drive_link, https://docs.google.com/presentation/d/1tt-xAKy-Y9jHvLuuPHee7PqhhmwXTsxENO1JOYXcm2Q/edit?usp=drive_link".split(',');

const clases_grabaciones = {
    clase_00: "https://www.youtube.com/watch?v=VqZ77FKwxHI",
    clase_01: "https://youtu.be/w9D47I3LBKE?si=AWE1DxWp3uOmnWXu",
    clase_02: "https://youtu.be/acV-1Fbj6TA?si=BtbDmPT9GQBu9J4l",
    clase_03: "https://youtu.be/sh_lNY15JWQ?si=Gekk5KgAQHX1GTT-",
    clase_04: "https://youtu.be/pEzjtpahs-s?si=YIDSBJszKGzBSJk6",
    clase_05: "",
    clase_06: "",
    clase_07: "https://youtu.be/DHF5-JO0_3c?si=D93bUWjqqSWNQozX",
    clase_08: "https://youtu.be/K2lYTRJA53Q?si=UvcDR5xOt3oqnydh",
    clase_09: "https://youtu.be/hcbIkmIfpPM?si=0xYn_y2CGGRpH4HU",
    clase_10: "https://youtu.be/pgCGzpqwbaI?si=REizRYOf2Q1ilqby",
    clase_11: "",
    clase_12: "",
    clase_13: "",
    clase_14: "",
    clase_15: "",
    clase_16: "",
    clase_17: "",
    clase_18: "",
    clase_19: "",
    clase_20: "",
    clase_21: "",
    clase_22: "",
    clase_23: "",
    clase_24: "",
    clase_25: "",
    clase_26: "",
    clase_27: "",
    clase_28: "",
    clase_29: "",
    clase_30: "",
    clase_31: "",
}

export const calendar_rows_details = [
    {
        semana: 1,
        teorica_fecha: "12/03/2024",
        teorica_temas: [
            'Presentación de la Materia',
            'Introducción a Linux',
            'Terminal'
        ],
        teorica_diapositiva: clases_diapositivas[0],
        teorica_modalidad: (<><ModalidadVirtual /></ >),
        teorica_grabacion: clases_grabaciones.clase_00,
        practica_fecha: "14/03/2024",
        practica_temas: [
            'Opciones de Instalación de Linux',
            'WSL, VM, Dual Boot',
            'Bash',
            'Editores de Terminal',
            'Variables de Entorno',
            'Estructuras Condicionales e Iterativas'
        ],
        practica_diapositiva: clases_diapositivas[1],
        practica_modalidad: (<><ModalidadVirtual /></>),
        practica_grabacion: clases_grabaciones.clase_01
    },
    {
        semana: 2,
        teorica_fecha: "19/03/2024",
        teorica_temas: [
            'Bash continuación',
            'Repaso',
            'Estructuras condicionales e iterativas',
            'Pipelines, redirecciones, listas(&&, ||, ;)',
            'Scripts(Busqueda - Reemplazo - Manejo de archivos, etc)'
        ],
        teorica_diapositiva: clases_diapositivas[2],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_02,
        practica_fecha: "21/03/2024",
        practica_temas: [
            'Ejercitación de Comandos',
            'Front End',
            'Introducción a Flask, HTML, CSS y Javascript',
            'Mi primer código en Flask',
        ],
        practica_diapositiva: clases_diapositivas[3],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_03
    },
    {
        semana: 3,
        teorica_fecha: "26/03/2024",
        teorica_temas: [
            'Front End',
            'Flask (con HTML + CSS ejemplo asistido)',
        ],
        teorica_diapositiva: clases_diapositivas[4],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_04,
        practica_fecha: "28/03/2024",
        practica_temas: ['FERIADO'],
        practica_diapositiva: clases_diapositivas[5],
        practica_modalidad: (<><ModalidadFeriado /></>),
        practica_grabacion: clases_grabaciones.clase_05
    },
    {
        semana: 4,
        teorica_fecha: "02/04/2024",
        teorica_temas: ['FERIADO'],
        teorica_diapositiva: "",
        teorica_modalidad: (<><ModalidadFeriado /></>),
        teorica_grabacion: clases_grabaciones.clase_06,
        practica_fecha: "04/04/2024",
        practica_temas: [
            '1er PARCIALITO: Linux + Bash',
            'HTML: ¿Qué es?, ¿Para qué se usa?, Estructura básica, Etiquetas básicas (div, p, a, img, ul / ol, table, form, input, button)',
            'CSS: ¿Qué es?, ¿Para qué se usa?, Clases y IDs, Atributos básicos (color, bg - color, display, text - align, font -*, width, height, margin, padding, border), Flexbox (direction, justify, align)',
        ],
        practica_diapositiva: clases_diapositivas[7],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_07
    },
    {
        semana: 5,
        teorica_fecha: "09/04/2024",
        teorica_temas: ['Javascript + HTML continuación'],
        teorica_diapositiva: clases_diapositivas[8],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_08,
        practica_fecha: "11/04/2024",
        practica_temas: [
            'Ejercitación integral Flask + Javascript + HTML'
        ],
        practica_diapositiva: clases_diapositivas[9],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_09
    },
    {
        semana: 6,
        teorica_fecha: "16/04/2024",
        teorica_temas: ['TDD + Testing (teórica)'],
        teorica_diapositiva: clases_diapositivas[10],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_10,
        practica_fecha: "18/04/2024",
        practica_temas: [
            '2do PARCIALITO: HTML, Javascript, CSSm Flask',
            'Depuración (debugging)',
            'Ejercitación Debugging + TDD'
        ],
        practica_diapositiva: clases_diapositivas[11],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_11
    },
    {
        semana: 7,
        teorica_fecha: "23/04/2024",
        teorica_temas: [
            'Consultas 1er parcial',
            'Simulacro Parcial'
        ],
        teorica_diapositiva: clases_diapositivas[12],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_12,
        practica_fecha: "25/04/2024",
        practica_temas: [
            'PRIMER PARCIAL',
        ],
        practica_diapositiva: "",
        practica_modalidad: (<><ModalidadPresencial /></>),
        practica_grabacion: clases_grabaciones.clase_13
    },
    {
        semana: 8,
        teorica_fecha: "30/04/2024",
        teorica_temas: [
            'Introducción a la Agilidad',
            'Kanban',
            'Herramientas y App (Jira - Trello - Asana - Basecamp, etc)',
            'CI / CD',
        ],
        teorica_diapositiva: clases_diapositivas[14],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_14,
        practica_fecha: "02/05/2024",
        practica_temas: [
            'Backend',
            'API Restful (Python): Qué es una API, Qué es REST, y Ejemplo'
        ],
        practica_diapositiva: clases_diapositivas[15],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_15
    },
    {
        semana: 9,
        teorica_fecha: "07/05/2024",
        teorica_temas: [
            'SQL',
            '¿Qué es una BDD? ¿Qué es SQL?',
            'Estructura de las BDD relacionales',
            'Instrucciones de tablas (CREATE / DROP TABLE)',
            'SELECT - FROM - WHERE'
        ],
        teorica_diapositiva: clases_diapositivas[16],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_16,
        practica_fecha: "09/05/2024",
        practica_temas: [
            'Crear API + Consumir datos en una base SQL'
        ],
        practica_diapositiva: clases_diapositivas[17],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_17
    },
    {
        semana: 10,
        teorica_fecha: "14/05/2024",
        teorica_temas: [
            'SQL Continuación',
            'Tipos de datos',
            'INSERT, UPDATE, DELETE',
            'AUTO_INCREMENT, PK',
        ],
        teorica_diapositiva: clases_diapositivas[18],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_18,
        practica_fecha: "16/05/2024",
        practica_temas: [
            'Ejercitación Integral Front + Backend',
            'ENTREGA TP + Explicación de herramientas y CI / CD'
        ],
        practica_diapositiva: clases_diapositivas[19],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_19
    },
    {
        semana: 11,
        teorica_fecha: "21/05/2024",
        teorica_temas: [
            'Git: ¿Qué es? ¿Para qué sirve?',
            'Repositorio y Estados',
            'Comandos básicos (status, add, commit, push, pull, clone)',
            'Github: ¿Qué es? Diferencia con Git, Asociar SSH, Crear y subir repositorio',
        ],
        teorica_diapositiva: clases_diapositivas[20],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_20,
        practica_fecha: "23/05/2024",
        practica_temas: [
            'Git Ejercitación',
            'Ramas (checkout, branch)',
            'git restore',
            'Staging',
            'git log y git diff',
        ],
        practica_diapositiva: clases_diapositivas[21],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_21
    },
    {
        semana: 12,
        teorica_fecha: "28/05/2024",
        teorica_temas: [
            'Docker: ¿Qué es? ¿Para qué se usa?',
            'Docker vs. VM',
            '¿Qué es un container?',
            '¿Qué es una imagen?',
            'Comandos básicos (run, ps, exec, stop, rm, images, pull)',
        ],
        teorica_diapositiva: clases_diapositivas[22],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_22,
        practica_fecha: "30/05/2024",
        practica_temas: [
            'Entrega parcial TP (creación de repo, listado de tareas, tablero Kanban, etc)',
            'Docker'
        ],
        practica_diapositiva: clases_diapositivas[23],
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_23
    },
    {
        semana: 13,
        teorica_fecha: "04/06/2024",
        teorica_temas: [
            'Docker continuación',
            'Dockerfile',
            'Volúmenes y puertos',
            'docker build',
            'Docker Compose: ¿Qué es? ¿Para qué sirve?',
            'compose.yaml',
            'Comandos básicos (build, up, stop, down)',
        ],
        teorica_diapositiva: clases_diapositivas[24],
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_24,
        practica_fecha: "06/06/2024",
        practica_temas: [
            'Entrega parcial TP (Vistas html, avances en API, etc)',
            'Consultas'
        ],
        practica_diapositiva: "",
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_25
    },
    {
        semana: 14,
        teorica_fecha: "11/06/2024",
        teorica_temas: [
            '1er Recuperatorio',
        ],
        teorica_diapositiva: "",
        teorica_modalidad: (<><ModalidadPresencial /></>),
        teorica_grabacion: clases_grabaciones.clase_26,
        practica_fecha: "13/06/2024",
        practica_temas: [
            'Entrega parcial TP (+80% de la funcionalidad)',
            'Consultas'
        ],
        practica_diapositiva: "",
        practica_modalidad: (<><ModalidadStream /></>),
        practica_grabacion: clases_grabaciones.clase_27
    },
    {
        semana: 15,
        teorica_fecha: "18/06/2024",
        teorica_temas: [
            'Entrega Final TP Integral',
        ],
        teorica_diapositiva: "",
        teorica_modalidad: (<><ModalidadPresencial /></>),
        teorica_grabacion: clases_grabaciones.clase_28,
        practica_fecha: "20/06/2024",
        practica_temas: ['FERIADO'],
        practica_diapositiva: "",
        practica_modalidad: (<><ModalidadFeriado /></>),
        practica_grabacion: clases_grabaciones.clase_29
    },
    {
        semana: 16,
        teorica_fecha: "25/06/2024",
        teorica_temas: [
            'Consultas TP Integral',
        ],
        teorica_diapositiva: "",
        teorica_modalidad: (<><ModalidadStream /></>),
        teorica_grabacion: clases_grabaciones.clase_30,
        practica_fecha: "27/06/2024",
        practica_temas: [
            '2da Entrega TP Integral',
        ],
        practica_diapositiva: "",
        practica_modalidad: (<><ModalidadPresencial /></>),
        practica_grabacion: clases_grabaciones.clase_31
    },
];