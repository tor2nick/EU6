$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Expenses.feature");
formatter.feature({
  "name": "Расход",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Расход",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь переходит на страницу входа",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_Navigates_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type \u003d \u0027email\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-0EER12A\u0027, ip: \u0027192.168.119.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50838}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4a0725845dad9d4abeb3c2cfb4fbfc05\n*** Element info: {Using\u003dxpath, value\u003d//input[@type \u003d \u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials(Login_StepDefinitions.java:35)\r\n\tat ✽.Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.(file:///C:/EU6TestNGSelenium/src/test/resources/features/Expenses.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Пользователь кликает \u0027Добавить платеж\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.Finance.step_definitions.Payments_StepDefinitions.user_clicks(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Пользователь выбирает \u0027Расход\u0027 radio button",
  "keyword": "When "
});
formatter.match({
  "location": "com.Finance.step_definitions.Expenses_StepDefinitions.user_selects_radio_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Пользователь выбирает \u0027Уменьшаемый план\u0027 from dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.Finance.step_definitions.Expenses_StepDefinitions.user_selects_from_dropdown(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\u0027Сумма факт\u0027, \u0027Счет отправителя\u0027 and \u0027Счет получателя\u0027 is disappeared",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Finance.step_definitions.Expenses_StepDefinitions.and_is_disappeared(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\u0027Когда\u0027 block is disappeared",
  "keyword": "And "
});
formatter.match({
  "location": "com.Finance.step_definitions.Expenses_StepDefinitions.block_is_disappeared(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Related Payments appeared",
  "keyword": "And "
});
formatter.match({
  "location": "com.Finance.step_definitions.Expenses_StepDefinitions.related_Payments_appeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь переходит на страницу входа",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_Navigates_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type \u003d \u0027email\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-0EER12A\u0027, ip: \u0027192.168.119.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50855}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 396723f27b132082e22fc68f23b76e60\n*** Element info: {Using\u003dxpath, value\u003d//input[@type \u003d \u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials(Login_StepDefinitions.java:35)\r\n\tat ✽.Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.(file:///C:/EU6TestNGSelenium/src/test/resources/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Пользователь попадает на главную страницу",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.userLandsOnTheHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Payments.feature");
formatter.feature({
  "name": "Новый платеж",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Новый платёж",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь переходит на страницу входа",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_Navigates_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type \u003d \u0027email\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-0EER12A\u0027, ip: \u0027192.168.119.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50872}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3fa85fcf8c9ac5a4a1ab79b7701e4c7f\n*** Element info: {Using\u003dxpath, value\u003d//input[@type \u003d \u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.Finance.step_definitions.Login_StepDefinitions.user_logs_in_with_valid_credentials(Login_StepDefinitions.java:35)\r\n\tat ✽.Пользователь входит в систему с действительными учетными данными администратора на второй странице входа.(file:///C:/EU6TestNGSelenium/src/test/resources/features/Payments.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Пользователь попадает на главную страницу",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Finance.step_definitions.Login_StepDefinitions.userLandsOnTheHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Пользователь кликает \u0027Добавить платеж\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.Finance.step_definitions.Payments_StepDefinitions.user_clicks(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Пользователь попадает на \u0027Добавить платеж\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Finance.step_definitions.Payments_StepDefinitions.user_lands_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});