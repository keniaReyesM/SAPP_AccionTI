# ACCION TI
SAPP : Sistema de Administración Preescolar y Primaria

## Versiones

* GRAILS `2.5.6`

## Recomendaciones

#### GIT

Ejecutar los siguientes comandos en GIT BASH
```bash
git checkout -b <ramalocal> -t <origin/ramaservidor>
git update-index --assume-unchange grails-app/conf/DataSource.groovy
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
git config --local commit.template .gitmensaje
git config --global credential.helper wincred (Sólo Windows)
```
##### Eviten usar

* **git commit -m "mensaje"**

#### VISUAL STUDIO CODE

##### :muscle: plugins recomendados 

Ejecutar en CMD 

```bash
code --install-extension 2gua.rainbow-brackets
code --install-extension Compulim.vscode-express
code --install-extension Compulim.vscode-ipaddress
code --install-extension donjayamanne.githistory
code --install-extension emilast.LogFileHighlighter
code --install-extension FallenMax.mithril-emmet
code --install-extension fms-cat.theme-monokaisharp
code --install-extension herrherrmann.angular-bootstrap
code --install-extension kogai.regex-railroad-diagrams
code --install-extension medzhidov.font-awesome-codes-html
code --install-extension mrmlnc.vscode-duplicate
code --install-extension spywhere.mark-jump
code --install-extension wcwhitehead.bootstrap-3-snippets
code --install-extension EditorConfig.EditorConfig
```

#### Documentacion

* **URL DE LEOPOLDO Y BETO // Algún día **

##### Java, Grails y Groovy

* [Grails](http://docs.grails.org/2.5.6/guide/introduction.html)
* [Groovy](http://groovy-lang.org/single-page-documentation.html)
* [Joda time](http://www.joda.org/joda-time/userguide.html)
* [Grails Spring Security Core](http://grails-plugins.github.io/grails-spring-security-core/2.0.x/index.html)
* [Grails Spring Security REST](http://alvarosanchez.github.io/grails-spring-security-rest/1.5.4/docs/guide/single.html)
* [Grails Spring Security UI](http://grails-plugins.github.io/grails-spring-security-ui/v1/guide/single.html)
* [Grails CORS](https://github.com/davidtinker/grails-cors)
* [Grails Resources](http://grails-plugins.github.io/grails-resources/)
* [Grails Mail](http://gpc.github.io/grails-mail/)
* [Grails Jasper](https://grails.org/plugin/jasper?skipRedirect=true)

##### JavaScript

* [MomentJS](https://momentjs.com/docs/)


##### CSS

* [Referencia visual(Tema Css)](https://adminlte.io/themes/AdminLTE/index2.html)


##### Extra

* [Fontawesome](http://fontawesome.io/icons/)
* [Service Workers](https://jakearchibald.com/2014/offline-cookbook/)
* [Visual Studio Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)


## Configuración general de aplicación

### Conexión a BD

* **En necesario crear la BD con nombre `sapp`**

```sql
CREATE SCHEMA `sapp` DEFAULT CHARACTER SET utf8;
```

:exclamation: **Revisar configuración de `Datasource.groovy` antes de arrancar el proyecto**

```groovy
 dataSource {
    dialect = 'org.hibernate.dialect.MySQL5InnoDBDialect'
    driverClassName = 'com.mysql.jdbc.Driver'
    dbCreate = 'update'
    url = 'jdbc:mysql://localhost:3306/sapp'
    username = 'root'
    password = 'root'
}   
```

## Dependencias agregadas

```groovy
runtime 'mysql:mysql-connector-java:5.1.29'
compile 'joda-time:joda-time:2.9.4'
```

## Plugins agregados

```groovy
compile 'org.grails.plugins:spring-security-core:2.0.0'
compile 'org.grails.plugins:jasper:1.11.0'
compile 'org.grails.plugins:resources:1.2.14'
runtime 'org.grails.plugins:zipped-resources:1.0'
runtime 'org.grails.plugins:cached-resources:1.0'
compile 'org.grails.plugins:spring-security-rest:1.5.4'
runtime 'org.grails.plugins:cors:1.1.8'
```

## Roles 

* **`ROLE_SA`** -> Super administrador
* **`ROLE_ADMIN`** -> Administrador
* **`ROLE_DOCENTE`** -> Docente
* **`ROLE_RESPONSABLE`** -> Responsable

 
## Usuarios iniciales

Administrador de prueba

* Usuario **`admin`**
* Contraseña **`admin`**



## Nomenclatura métodos controladores grails

#### **Ejemplo métodos CRUD**



## Excepciones

> Sólo para guardar y modificar

Las  lanza cuando ocurre problemas en las clase domino, otros tipos de errores seguiran mostrandose automaticamente

```groovy
//Validar clase dominio antes de cualquier save()
    banco.validate()
    banco.save(flush:true, failOnError:true)

