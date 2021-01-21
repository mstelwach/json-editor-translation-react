# JSON Edytor Tłumaczeń

Prosta aplikacja internetowa do edycji plików JSON zawierających tłumaczenia.\
Załaduj translację i w łatwy sposób uzupełnij brakujące etykiety tłumaczeniami.

## Front-end

### React

Projekt jest uruchamiany za pomocą [Create React App](https://github.com/facebook/create-react-app).

#### Dostępne skrypty

W katalogu projektu możesz uruchomić:

#### `npm start`

Uruchamia aplikację w trybie deweloperskim.\
Otwórz [http://localhost:3000](http://localhost:3000) aby wyświetlić w przeglądarce.

Strona zostanie ponownie zalałodawna, jeśli wprowadzisz zmiany.\
W konsoli zostaną również wyświetlone wszelkie błędy.

#### `npm test`

Uruchamia testy w interaktywnym trybie 'watch mode'.\
Więcej informacji można znaleźć w sekcji dotyczącej [uruchomionych testów](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`

Tworzy aplikację do produkcji w folderze „build”.\
Prawidłowo łączy Reacta w trybie produkcyjnym i optymalizuje kompilację pod kątem najlepszej wydajności.

Kompilacja jest zminimalizowana, a nazwy plików zawierają skróty.\
Twoja aplikacja jest gotowa do wdrożenia!

Więcej informacji można znaleźć w sekcji dotyczącej [wdrożenia](https://facebook.github.io/create-react-app/docs/deployment).

#### Dowiedz się więcej!

Możesz dowiedzieć sie więcej w [dokumentacji Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Aby zapoznać się z React, zajrzyj do [dokumentacji React](https://reactjs.org/).

## Back-end

### python

Logika skryptu opiera się na dwóch metodach.
1. Pierwsza pozwala porównać tłumaczenia. Nieprzetłumaczone etykiety są wychwycane przez program a następnie \
zapisywane w nowo utworzonym pliku `.json`. Brakujące etykiety uzupełniamy w aplikacji webowej.
2. Druga metoda z kolei pozwala na wprowadzenie przetłumaczonych etykiet danego języka do źródłowego pliku translacji.

#### Skrypt `json-editor.py`

Aby użyć danej metody, wykonaj następujące kroki:
  1. Przejdź do katologu `./backend`
  2. Otwórz wiersz poleceń, a następnie wprowadź polecenie:
  
- Porównanie głównego tłumaczenia z pozostałymi translacjami pod względem nieprzetłumaczonych etykiet. \
  Wychwycenie brakujących etykiet lub błędnie przetłumaczonych.
    
    Przykładowe dane wejściowe: 
    - `en_US.JSON` - nazwa pliku głównego tłumaczenia
    - `es.json` - nazwa pliku tłumaczenia z brakującymi etykietami
     ```
  $ python3 json-editor.py -set_untranslated_labels 'en_US.JSON' 'es.json'
     ```
    Przykładowe dane wyjściowe: Utworzenie pliku `en-US_es-ES.json` w katalogu `backend/translations/untranslated_labels`.
    
- Wprowadzenie przetłumaczonych etykiet danego języka do źródłowego pliku translacji.
    
    Przykładowe dane wejściowe: 
    - `en-US_es-ES.json` - zaktualizowany plik z przetłumaczonymi etykietami
    - `es-ES` - język tłumaczeń, który chcemy zaktualizować
    - `es.json` - nazwa pliku tłumaczenia źródłowego do zaktualizowania
    
     ```
  $ python3 json-editor.py -update_translations 'en-US_es-ES.json' 'es-ES' 'es.json'
     ```
  
## Narzędzia do uruchomienia aplikacji i skryptu:
* [python] - https://www.python.org/
* [npm] - https://www.npmjs.com/