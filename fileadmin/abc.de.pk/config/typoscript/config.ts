config.doctype = html5
config.metaCharset = utf-8
config.no_cache = 0
config.admPanel = 0
config.debug = 0

config.spamProtectEmailAddresses = 2
config.spamProtectEmailAddresses_atSubst = -monkey-tail-
config.spamProtectEmailAddresses_lastDotSubst = -dot-

# replace baseURL with your domain, don't forget to add a trailing slash
# the following 3 lines are used primarily with the RealUrl extension
config.baseURL = http://abc.de.pk/ 
config.simulateStaticDocuments = 0
config.tx_realurl_enable = 1

page = PAGE
page.typeNum = 0

page.10 = FLUIDTEMPLATE
page.10 {
    format = html
    file = fileadmin/abc.de.pk/templates/layouts/main_layout.html
    partialRootPath = fileadmin/abc.de.pk/templates/partials/
    layoutRootPath = fileadmin/abc.de.pk/templates/layouts/
    variables {
        content_main < styles.content.get
        content_main.select.where = colPos = 0
        content_column_1 < styles.content.get
        content_column_1.select.where = colPos = 1
        content_column_2 < styles.content.get
        content_column_2.select.where = colPos = 2
    }
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = fileadmin/abc.de.pk/templates/main_1_column_with_menu.html
    1 = TEXT
    1.value = fileadmin/abc.de.pk/templates/main_1_column_with_menu.html
    2 = TEXT
    2.value = fileadmin/abc.de.pk/templates/main_1_column_without_menu.html
    3 = TEXT
    3.value = fileadmin/abc.de.pk/templates/main_2_column_without_menu.html
}

page.includeCSS {
    file1 = fileadmin/abc.de.pk/templates/css/main.css
}

# be sure to display website correctly in mobile browsers
page.headerData.10 = TEXT
page.headerData.10.value (
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript" src="/fileadmin/abc.de.pk/templates/script/jquery.custom.js"></script>
)