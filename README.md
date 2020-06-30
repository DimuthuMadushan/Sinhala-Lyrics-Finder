# Sinhala-Lyrics-Finder

The Sinhala-Lyrics-Finder allows you to search sinhala song lyrics. You can simply type search term by typing search term in the search box in web UI. It handles basic search term and display result in UI.

# Compatibility

|    Solr    | 
|:----------:|
|   8.5.2    |

# Getting started
 
1. First you need to clone the project.
    ```
    git clone https://github.com/DimuthuMadushan/Sinhala-Lyrics-Finder.git

    ```

2. To Start the solr server use folllwing commands.You can see that your solr server is running by launching solr admin UI at http://localhost:8983/solr/ in your browser.
   ```
    $cd solr-8.5.2/

    for Unix or Mac:
    $./bin/solr start -c -p 8983 -s example/cloud/node1/solr

    for Windows:
    $.\bin\solr.cmd start -c -p 8983 -s example/cloud/node1/solr
    ```

Note: Before start the solr server, make sure that your **8983** port is freely available.

3. Run "SinhalaLyricsSearch.html" file in your browser.

Now, you can see searching UI in you browser. You can type any term in the search box and press the button below. It will be displaying search result below the search box.

