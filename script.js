// --- 1. УТИЛИТЫ СИСТЕМЫ (Глобальные функции) ---

function log(message, type = 'info') {
    const output = document.getElementById('console-output');
    const div = document.createElement('div');

    // Настраиваем цвета в зависимости от типа лога
    const colors = {
        info: 'text-slate-300',
        success: 'text-emerald-400',
        error: 'text-rose-400',
        warning: 'text-amber-400',
        ai: 'text-purple-400'
    };

    // Добавляем timestamp для реалистичности терминала
    const time = new Date().toLocaleTimeString('ru-RU', {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    div.className = `${colors[type]} break-words`;
    div.innerHTML = `<span class="text-slate-600 opacity-50">[${time}]</span> <span class="text-cyan-600 ml-1">❯</span> ${message}`;

    output.appendChild(div);
    output.scrollTop = output.scrollHeight; // Автоскролл вниз
}

function clearConsole() {
    // Очищаем консоль терминала
    document.getElementById('console-output').innerHTML = '<div class="text-slate-500">// Терминал очищен. Данные сессии сброшены.</div>';

    // Протокол безопасности: принудительно стираем API-ключ из поля ввода
    const keyInput = document.getElementById('api-key');
    if (keyInput.value !== '') {
        keyInput.value = '';
        log("ПРОТОКОЛ БЕЗОПАСНОСТИ: API-ключ удален из памяти терминала.", "error");
    }
}

// --- 2. ЛОГИКА КОМПАРАТОРОВ (Из домашнего задания) ---

// Стрелочная функция для сортировки/сравнения строк по длине
const comparatorArrow = (a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
};

// --- 3. ГЛАВНЫЙ ПАЙПЛАЙН (Конвейер обработки массива) ---

function processPipeline(arr) {
    log(`Поступил массив на обработку: [${arr.map(i => `"${i}"`).join(', ')}]`, 'info');

    // .every() - Проверка на радиацию (все ли элементы являются строками?)
    const isValid = arr.every(item => typeof item === 'string');
    if (!isValid) {
        log("ОШИБКА: Обнаружен несовместимый формат данных!", "error");
        return;
    }

    // .some() - Быстрый скан на сверхгабаритные грузы (> 8 символов)
    const hasLongWords = arr.some(item => item.length > 8);
    log(`Сканирование на негабарит (длина > 8): ${hasLongWords ? 'ОБНАРУЖЕНО' : 'ЧИСТО'}`, 'warning');

    // .forEach() - Инвентаризация перед распаковкой
    let emptyCount = 0;
    arr.forEach(item => {
        if (item.trim() === "") emptyCount++;
    });
    if (emptyCount > 0) log(`Внимание: обнаружено ${emptyCount} пустых/бракованных ячеек.`, 'warning');

    log("--- ЗАПУСК ЦЕПОЧКИ МЕТОДОВ (Method Chaining) ---", "info");

    const processedData = arr
        // .map() - Распаковка. Убираем пробелы по краям
        .map(item => item.trim())
        // .filter() - Таможня. Отбрасываем пустые строки (защита от null)
        .filter(item => item.length > 0)
        // .sort() - Упорядочивание по длине
        .sort(comparatorArrow);

    log(`Склад после очистки и сортировки: [${processedData.join(', ')}]`, 'success');

    // Защита для reduce: проверяем, не опустел ли склад после фильтрации
    if (processedData.length === 0) {
        log("КРИТИЧЕСКАЯ ОШИБКА: После фильтрации массив пуст. Остановка конвейера.", "error");
        return;
    }

    // .find() - Поиск первого груза среднего размера (> 5 символов)
    const firstMediumWord = processedData.find(item => item.length > 5);
    if (firstMediumWord) {
        log(`Первый груз > 5 символов: "${firstMediumWord}"`, 'info');
    }

    // .reduce() - Поиск абсолютного максимума (с начальным значением!)
    const maxString = processedData.reduce((acc, curr) => {
        // Если компаратор вернул > 0, текущий больше аккумулятора
        return comparatorArrow(curr, acc) > 0 ? curr : acc;
    }, processedData[0]); // <-- processedData[0] это initialValue (страховка)

    log("--- ИТОГ АНАЛИЗА ---", "warning");
    log(`🏆 Самый габаритный груз: "${maxString}" (Длина: ${maxString.length})`, "success");

    // Интеграция с LLM: Создаем кнопку для анализа найденного максимума
    addAiCustomsButton(maxString);
}

// --- 3.5 ИИ-ТАМОЖНЯ (Пост-анализ LLM) ---

function addAiCustomsButton(cargoItem) {
    const output = document.getElementById('console-output');
    const btnDiv = document.createElement('div');
    btnDiv.className = 'mt-3 mb-4 border-l-2 border-indigo-500 pl-3';
    btnDiv.innerHTML = `
                <div class="text-indigo-400 text-xs mb-1">Доступна расширенная ИИ-диагностика:</div>
                <button onclick="requestAiCustoms('${cargoItem}')" class="bg-indigo-900/30 hover:bg-indigo-800/50 border border-indigo-700/50 text-indigo-300 text-xs py-2 px-4 rounded-lg transition-all active:scale-95 flex items-center gap-2">
                    <span>🔍</span> Просканировать "${cargoItem}" через ИИ-Таможню
                </button>
            `;
    output.appendChild(btnDiv);
    output.scrollTop = output.scrollHeight;
}

async function requestAiCustoms(cargoItem) {
    const terminal = document.getElementById('console-output');
    let apiKey = document.getElementById('api-key').value.trim();
    if (!apiKey) apiKey = ""; // Canvas подставит свой ключ автономно

    log(`\nИнициализация сканера... Анализ объекта: [${cargoItem}]`, "ai");
    terminal.parentElement.classList.add('active-scan');

    // Промпт: Задаем строгую роль, чтобы избежать "воды" в ответе
    const prompt = `Ты строгий ИИ-таможенник орбитального дока. Проанализируй название груза: "${cargoItem}". 
            Напиши краткий отчет (максимум 2-3 предложения): 
            1. Что это за материал/объект (придумай sci-fi описание, если слово неизвестно). 
            2. Уровень угрозы (от 1 до 5). 
            Отвечай в строгом, роботизированном стиле без приветствий.`;

    try {
        // Обновленный эндпоинт до версии gemini-3-flash-preview
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{parts: [{text: prompt}]}]
            })
        });

        if (!response.ok) throw new Error(`Ошибка HTTP шлюза: ${response.status}`);

        const result = await response.json();
        const report = result.candidates[0].content.parts[0].text;

        log(`[ОТЧЕТ ТАМОЖНИ]: ${report}`, "success");

    } catch (error) {
        log(`Сбой ИИ-таможни: ${error.message}`, "error");
    } finally {
        terminal.parentElement.classList.remove('active-scan');
    }
}

// --- 4. РУЧНОЙ ЗАПУСК (Локальные данные) ---

function runLocalPipeline() {
    log("Запуск локального тестового сценария...", "warning");
    // Массив с грязными данными для проверки filter и trim
    const localData = [
        "Docker", "Astro", "WebStorm", "React", "   ",
        "Git", "Redux", "EVE Online", "X4", ""
    ];
    processPipeline(localData);
}

// --- 5. СЕТЕВОЙ ЗАПУСК (ИИ-Диспетчер) ---

async function requestAiManifest() {
    const themeInput = document.getElementById('ai-theme').value.trim() || 'Киберпанк импланты';
    let apiKey = document.getElementById('api-key').value.trim();
    const btn = document.getElementById('ai-btn');
    const terminal = document.getElementById('console-output');

    // Если ключ не введен, используем встроенный (только для этого стенда)
    if (!apiKey) {
        // ВНИМАНИЕ: В реальном проекте ключи НИКОГДА не хранят на фронтенде.
        // Это сделано исключительно для автономности учебного стенда.
        apiKey = ""; // В среде песочницы ключ подставится автоматически
    }

    if (!apiKey) {
        log("Для ИИ-запроса требуется Gemini API Key. Введите его в поле.", "error");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="animate-pulse">Установка Uplink-соединения...</span>`;
    terminal.parentElement.classList.add('active-scan');

    log(`\nОтправка запроса к орбитальной нейросети...`, "ai");
    log(`Тема манифеста: "${themeInput}"`, "ai");

    // Промпт для ИИ
    const prompt = `Ты логистический ИИ. Сгенерируй массив из 10 строк на тему "${themeInput}". Одна строка ОБЯЗАТЕЛЬНО должна быть пустой (просто 3 пробела "   "). Верни ТОЛЬКО валидный JSON массив строк. Никакого текста, никаких пояснений, без markdown-кавычек. Пример: ["слово1", "   ", "слово3"].`;

    try {
        // Обновляем модель до gemini-3-flash-preview для лучшей логики
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{parts: [{text: prompt}]}]
            })
        });

        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

        const result = await response.json();
        let jsonText = result.candidates[0].content.parts[0].text;

        // Очистка от возможных markdown артефактов
        jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();

        const aiArray = JSON.parse(jsonText);
        log("Данные получены. Передаю на сборочную линию.", "success");

        // Запуск пайплайна с данными ИИ
        processPipeline(aiArray);

    } catch (error) {
        log(`Сбой нейросети: ${error.message}`, "error");
        log(`Убедитесь, что API ключ валиден и нет ограничений CORS.`, "warning");
    } finally {
        btn.disabled = false;
        btn.innerHTML = `Запросить манифест`;
        terminal.parentElement.classList.remove('active-scan');
    }
}