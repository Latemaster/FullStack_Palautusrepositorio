```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document
    deactivate server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    JSON document

```
