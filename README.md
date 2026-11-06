# AI Logistic Pipeline

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

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
