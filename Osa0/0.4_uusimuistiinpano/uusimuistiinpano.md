```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note
    Note lähetetään serverille

    server-->>browser: Vastaus (esim. vahvistusviesti)

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: Notes sivu

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css tiedosto

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: main.js tiedosto

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: data.json tiedosto
```
