<!--suppress MarkdownUnresolvedFileReference -->

# AI Logistic Pipeline

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

<a name="english"></a>

## English

A sci-fi "logistics terminal" that sorts a cargo list with JavaScript array methods and can ask Google Gemini to invent the cargo list and to inspect the largest item.

**Live demo:** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

### Try it in a minute

Choose **Local Data** to process the built-in cargo list without a key. Follow the trimmed and sorted entries and the largest-item result; **Wipe Data** resets the terminal. The Gemini paths are optional.

### Features

- **Manual mode** works without any key: a test cargo list with empty and padded entries goes through the pipeline.
- **AI dispatcher:** you enter a topic and your own Gemini API key; the model returns a JSON array of cargo names, which is validated (an array of strings, at most 50 items of up to 100 characters) before processing.
- **AI customs:** one click asks the model for a short report on the largest cargo item.
- A terminal-style log with timestamps and colour-coded messages. Everything, including the model's answers, is printed as plain text, so HTML in the data is never executed.
- **Wipe Data** clears the log and removes the key from the input field.

### The pipeline

`every` (all items are strings) → `some` (oversized items) → `forEach` (empty slots) → `map(trim)` → `filter` (drop empty) → `sort` by length with an arrow comparator → `find` (first item longer than 5) → `reduce` (the longest item).

### Tech stack

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

### Engineering focus

- Array methods and method chaining, a custom comparator, `reduce` with an initial value.
- Calling an LLM over REST and treating its answer as untrusted data: strict JSON, validation, safe output.
- Building DOM nodes instead of inserting HTML strings.

### Your API key

The page has no built-in key. A key you type is sent only to Google in the `x-goog-api-key` header and is not saved anywhere. Without a key, use the manual mode.

### Run locally

Open `index.html` in a browser, or serve the folder (`npx serve .`) and open the address it prints.

### Roadmap

These are proposed next steps, not current features.

- **Visual:** make the manual/AI routes and loading, success and failure states easier to distinguish while keeping the terminal style.
- **Engineering:** build Tailwind locally and validate the AI response against an explicit JSON schema.
- **Functionality:** let visitors edit or import a small cargo list and compare its input with each pipeline stage.

AI requests have a 30-second timeout; the manual pipeline does not require an API request.

---

<a name="russian"></a>

## Русский

**AI Logistic Pipeline — ИИ-терминал логистики**

Фантастический «логистический терминал». Он сортирует список грузов методами массивов JavaScript и умеет попросить Google Gemini придумать список грузов и проверить самый крупный.

**Демо:** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

### Короткий сценарий просмотра

Нажмите **Local Data**, чтобы обработать встроенный список грузов без ключа. Проследите очистку, сортировку и выбор самого длинного элемента; **Wipe Data** сбрасывает терминал. Вызовы Gemini необязательны.

### Возможности

- **Ручной режим** работает без ключа: через конвейер проходит тестовый список с пустыми строками и пробелами.
- **ИИ-диспетчер.** Вы вводите тему и свой ключ Gemini API. Модель возвращает JSON-массив названий грузов. Перед обработкой он проверяется: это массив строк, не больше 50 штук, каждая до 100 символов.
- **ИИ-таможня:** одним щелчком модель пишет короткий отчёт о самом крупном грузе.
- **Журнал в виде терминала** — со временем и цветами сообщений. Всё, включая ответы модели, выводится простым текстом: HTML из данных никогда не исполняется.
- **«Экстренная очистка»** очищает журнал и стирает ключ из поля.

### Конвейер

`every` (все элементы — строки) → `some` (негабарит) → `forEach` (пустые ячейки) → `map(trim)` → `filter` (убрать пустые) → `sort` по длине стрелочным компаратором → `find` (первый длиннее 5) → `reduce` (самый длинный).

### Стек

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

### Инженерные решения

- Методы массивов и цепочки вызовов, свой компаратор, `reduce` с начальным значением.
- Запрос к языковой модели через REST. Её ответ — чужие данные: строгий JSON, проверка, безопасный вывод.
- Сборка элементов DOM вместо вставки HTML-строк.

### Ваш ключ API

Встроенного ключа на странице нет. Введённый ключ уходит только в Google, в заголовке `x-goog-api-key`, и нигде не сохраняется. Без ключа пользуйтесь ручным режимом.

### Как запустить

Откройте `index.html` в браузере или запустите локальный сервер (`npx serve .`) и откройте адрес, который он покажет.

### Планы

Это предлагаемые следующие шаги, а не уже работающие функции.

- **Визуал:** яснее разделить ручной и ИИ-маршруты, состояния ожидания, результата и ошибки, сохраняя стиль терминала.
- **Инженерия:** собирать Tailwind локально и проверять ответ ИИ по явной JSON-схеме.
- **Функции:** дать посетителю редактировать или импортировать небольшой список грузов и сравнивать результат каждого шага конвейера.

Запросы ИИ ограничены 30 секундами; ручной конвейер не требует обращения к API.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

**AI Logistic Pipeline — מסוף לוגיסטיקה עם בינה מלאכותית**

"מסוף לוגיסטי" בסגנון מדע בדיוני. הוא ממיין רשימת מטענים בעזרת מתודות של מערכים ב-JavaScript, ויכול לבקש מ-Google Gemini להמציא רשימת מטענים ולבדוק את המטען הגדול ביותר.

**הדגמה:** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

### הדגמה קצרה

לחצו על **Local Data** לעיבוד רשימת המטענים המובנית ללא מפתח. עקבו אחרי הניקוי, המיון ובחירת הפריט הארוך ביותר; **Wipe Data** מאפס את המסוף. מסלולי Gemini הם אפשרות נוספת.

### יכולות

- **מצב ידני** עובד בלי מפתח: רשימת בדיקה עם שורות ריקות ורווחים עוברת בצינור העיבוד.
- **סדרן AI:** מזינים נושא ומפתח Gemini API משלכם. המודל מחזיר מערך JSON של שמות מטענים, והוא נבדק לפני העיבוד: מערך של מחרוזות, עד 50 פריטים, עד 100 תווים כל אחד.
- **מכס AI:** בלחיצה אחת המודל כותב דוח קצר על המטען הגדול ביותר.
- **יומן בסגנון מסוף** עם שעה וצבעים. הכול, כולל תשובות המודל, מוצג כטקסט פשוט, ולכן HTML מתוך הנתונים לעולם לא רץ.
- **ניקוי חירום** מוחק את היומן ואת המפתח מהשדה.

### טכנולוגיות

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

### המפתח שלכם

בדף אין מפתח מובנה. המפתח שמוזן נשלח רק ל-Google, בכותרת `x-goog-api-key`, ואינו נשמר בשום מקום. בלי מפתח השתמשו במצב הידני.

### הרצה מקומית

פתחו את `index.html` בדפדפן, או הריצו שרת מקומי (`npx serve .`) ופתחו את הכתובת שהוא מציג.

### תוכניות

אלה צעדים מוצעים להמשך, ולא יכולות שכבר קיימות.

- **עיצוב:** להבחין טוב יותר בין המסלול הידני למסלול AI ובין המתנה, תוצאה ושגיאה, תוך שמירת סגנון המסוף.
- **הנדסה:** לבנות את Tailwind מקומית ולאמת את תשובת המודל לפי סכמת JSON מפורשת.
- **פונקציונליות:** לאפשר עריכה או ייבוא של רשימת מטענים קטנה והשוואת התוצאה בכל שלב בצינור.

בקשות AI מוגבלות ל-30 שניות; הצינור הידני אינו דורש בקשת API.

</div>

---

<a name="spanish"></a>

## Español

**AI Logistic Pipeline — terminal logístico con IA**

Un «terminal logístico» de ciencia ficción. Ordena una lista de cargas con los métodos de arrays de JavaScript y puede pedirle a Google Gemini que invente una lista de cargas y revise la más grande.

**Demo:** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

### Recorrido rápido

Pulse **Local Data** para procesar la lista de cargas incorporada sin clave. Siga la limpieza, la ordenación y la elección del elemento más largo; **Wipe Data** reinicia el terminal. Las llamadas a Gemini son opcionales.

### Funciones

- **El modo manual** funciona sin clave: por la cadena pasa una lista de prueba con líneas vacías y espacios.
- **Despachador IA.** Usted escribe un tema y su propia clave de Gemini API. El modelo devuelve un array JSON con nombres de cargas. Antes de procesarlo se comprueba: es un array de cadenas, no más de 50, cada una de hasta 100 caracteres.
- **Aduana IA:** con un clic el modelo escribe un breve informe sobre la carga más grande.
- **Registro con aspecto de terminal**, con hora y colores de mensaje. Todo, incluidas las respuestas del modelo, se muestra como texto plano: el HTML que llega en los datos nunca se ejecuta.
- **«Limpieza de emergencia»** vacía el registro y borra la clave del campo.

### La cadena

`every` (todos los elementos son cadenas) → `some` (sobredimensionado) → `forEach` (celdas vacías) → `map(trim)` → `filter` (quitar vacíos) → `sort` por longitud con un comparador flecha → `find` (el primero de más de 5) → `reduce` (el más largo).

### Tecnologías

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

### Decisiones técnicas

- Métodos de arrays y llamadas encadenadas, un comparador propio, `reduce` con valor inicial.
- Petición REST al modelo de lenguaje. Su respuesta son datos ajenos: JSON estricto, validación, salida segura.
- Los elementos del DOM se construyen uno a uno en lugar de insertar cadenas HTML.

### Su clave de API

La página no trae ninguna clave incorporada. La clave introducida va solo a Google, en la cabecera `x-goog-api-key`, y no se guarda en ningún sitio. Sin clave, use el modo manual.

### Cómo ejecutarlo

Abra `index.html` en el navegador o inicie un servidor local (`npx serve .`) y abra la dirección que muestre.

### Planes

Son próximos pasos propuestos, no funciones que ya existan.

- **Visual:** separar con más claridad la ruta manual y la de IA, y los estados de espera, resultado y error, conservando el estilo de terminal.
- **Ingeniería:** compilar Tailwind en local y validar la respuesta de la IA con un esquema JSON explícito.
- **Funciones:** permitir al visitante editar o importar una lista corta de cargas y comparar el resultado de cada paso de la cadena.

Las peticiones a la IA tienen un límite de 30 segundos; la cadena manual no necesita llamar a ninguna API.

---

<a name="french"></a>

## Français

**AI Logistic Pipeline — terminal logistique avec IA**

Un « terminal logistique » de science-fiction. Il trie une liste de cargaisons avec les méthodes de tableaux de JavaScript et peut demander à Google Gemini d'inventer une liste de cargaisons et d'examiner la plus grande.

**Démo :** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

### Visite rapide

Appuyez sur **Local Data** pour traiter la liste intégrée sans clé. Suivez le nettoyage, le tri et le choix de l'élément le plus long ; **Wipe Data** remet le terminal à zéro. Les appels à Gemini sont facultatifs.

### Fonctions

- **Le mode manuel** marche sans clé : une liste de test avec des lignes vides et des espaces traverse la chaîne.
- **Répartiteur IA.** Vous saisissez un thème et votre propre clé Gemini API. Le modèle renvoie un tableau JSON de noms de cargaisons. Avant le traitement, il est vérifié : c'est un tableau de chaînes, 50 au plus, chacune de 100 caractères au plus.
- **Douane IA :** en un clic, le modèle rédige un court rapport sur la plus grande cargaison.
- **Journal façon terminal**, avec l'heure et des couleurs de message. Tout, y compris les réponses du modèle, s'affiche en texte brut : le HTML venu des données n'est jamais exécuté.
- **« Nettoyage d'urgence »** vide le journal et efface la clé du champ.

### La chaîne

`every` (tous les éléments sont des chaînes) → `some` (hors gabarit) → `forEach` (cases vides) → `map(trim)` → `filter` (retirer les vides) → `sort` par longueur avec un comparateur fléché → `find` (le premier de plus de 5) → `reduce` (le plus long).

### Technologies

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

### Choix techniques

- Méthodes de tableaux et appels chaînés, un comparateur maison, `reduce` avec une valeur initiale.
- Requête REST au modèle de langage. Sa réponse est une donnée étrangère : JSON strict, validation, affichage sûr.
- Les éléments du DOM sont construits un par un au lieu d'insérer des chaînes HTML.

### Votre clé d'API

La page ne contient aucune clé intégrée. La clé saisie part uniquement chez Google, dans l'en-tête `x-goog-api-key`, et n'est enregistrée nulle part. Sans clé, utilisez le mode manuel.

### Lancer le projet

Ouvrez `index.html` dans le navigateur ou lancez un serveur local (`npx serve .`) et ouvrez l'adresse qu'il affiche.

### Projets

Ce sont des étapes proposées, pas des fonctions déjà en place.

- **Visuel :** séparer plus nettement la voie manuelle et la voie IA, ainsi que les états d'attente, de résultat et d'erreur, en gardant le style terminal.
- **Ingénierie :** compiler Tailwind en local et valider la réponse de l'IA avec un schéma JSON explicite.
- **Fonctions :** laisser le visiteur modifier ou importer une courte liste de cargaisons et comparer le résultat de chaque étape de la chaîne.

Les requêtes à l'IA sont limitées à 30 secondes ; la chaîne manuelle n'a besoin d'aucune API.
