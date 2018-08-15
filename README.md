# URLShortener
test project
test server: http://maksim6x.beget.tech/

## Описание проекта

#### Главная страница ( http://maksim6x.beget.tech/ )

По факту, на это странице весь основной функционал. 

При вводе пользователем General Url на сервер отправляется запрос, который проверяет доступность адреса. 
Если статус >=200 и < 400 - возвращает true, иначе - false. В случае, если false - выскачит ошибка под инпутом.

При вводе Short Url проверяется, введёная строка, на совпадения с зарезервированными путями ( указаны ниже ) и с теми, что были занесены в базу.
Возвращает `true`\`false`. Выскакивает ошибка, если false.
При клике на Generate генерируется уникальный код на основе текущего серверного времени и хэшируется в md5.

При клике на Add Pair добавляется новая пара в базу данных и перенаправляет пользователя на экран "копирования ссылки".
На экране "копирования ссылки" `input` с получившейся ссылкой и кнопка Copy, копирующая ссылку...

#### Список пар ( http://maksim6x.beget.tech/list )

Таблица со всеми ссылками. Дата создания, основная ссылка, короткая ссылка, количество "редиректов".

## Внутренняя организация

#### Зарезервированые ссылки

/checkgeneralurl
/checkshorturl
/generate
/addurls
/getlist
/login
/login_check

### Front end

Фронтенд часть проекта представллена двумя компонентами, которые соответствуют путям `''` и `'/redirects-list'`.
Все функции, реализующие "общение" с сервером вынесены в корень папки `/app/`, в файл `spp.service.ts`. 

#### `app/app.services.ts`

`check_general_url(checked_url: string)` - принимает ссылку на сайт. Проверяет статус. Возвращает `boolean`. (`/checkgeneralurl`)

`check_short_url(checked_url: string)` - принимает короткую ссылку. Проверяет совпадения с зарезервированными путями и наличие в базе. Возвращает `boolean`. ( `/checkshorturl`)

`check_urls_total(general_url: string, short_url: string, check_general: boolean, check_short: boolean)` - доп. проверка. Влияет на активность кнопки. Принимает ссылку на сайт, короткую, результат проверки основной ссылки, результат проверки короткой. Сделано для полного исключения создания не валидных ссылок. Возвращает `boolean`.

`add_urls(general_url: string, short_url: string)` - принимает пару ссылок. Основную и короткую. Заносит в базу данных. Возвращает boolean.

`get_urls()` - возвращает объект с массивами ссылок.

`generate_url()` - возвращает захешированное в md5 время сервера. ( не самое лучшее решение, но гарантирует уникальность )

`login_check(login: string, password: string)` - отправляет на проверку имя пользователя и пароль. Возвращает два значения типа boolean. 

`login(login: string, password: string)` - отправляет имя пользователя и пароль для авторизации.

### Back end

Бэк енд часть представленна двумя контроллерами. `Default` и `CheckUrls`.
В `Defult` прописаны основные пути: `/`, `/{slug}`, `/getlist`, `/redirects-list`, `/generate`.
В `CheckUrls` - `/checkshorturl`, `/checkgeneralurl`, `/addurls`.

В файл `config/Resources/views/default/index.html.twig` помещена структура фронтенд приложения. В папку `web/dist` - скрипты и стили.

#### `src/AppBundle/Controller/DefaultController.php`

`indexAction` - вывод главной страницы. Тут же происходит проверка ссылок на истечение срока 15 суток. Если истек - удаляет запись. ( не лучшее решение, но работает. Требует переработки при большом потоке посетителей и большом количестве ссылок в бд )

#### `src/AppBundle/Controller/ListUrlController.php`

`redirectsListAction` - вывод списка. Angular Component - `redirects-list`

`getListAction` - принимает post request. Возвращает список ссылок

#### `src/AppBundle/Controller/RedirectsController.php`

`redirectAction` - перенаправление на конечный сайт.

#### `src/AppBundle/Controller/CheckUrlsController.php`

`checkshorturlAction` - проверка короткой ссылки. Возвращает boolean. При попытке перехода - редирект на главную страницу.

`checkAction` - проверка основной ссылки. Возвращает boolean. При попытке перехода - редирект на главную страницу.

`addurlsAction` -  добавление ссылок в бд. Возвращает true. При попытке перехода - редирект на главную страницу.

`generateUrlAction` - генерирует и возвращает уникальную ссылку 

#### `src/AppBundle/Controller/LoginController.php`

`loginAction` - проверка наличия пользователя. Принимает имя и пароль типа `string`. Возвращает массив из трёх переменных типа boolean. ( ради этого пришлось сделать `password` пользователя публичным. Не нашёл как в symfony работать с ошибками авторизации... )

`login` - страница авторизации
