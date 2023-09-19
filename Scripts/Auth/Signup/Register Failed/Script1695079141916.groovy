import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

def randomNumber = org.apache.commons.lang.RandomStringUtils.randomNumeric(5)
println(randomNumber)

def username = 'ernaqa'
def password = '123456'
def randomUsername = username+randomNumber

WebUI.openBrowser(GlobalVariable.url)
WebUI.click(findTestObject('Object Repository/Home/navbar_signup'))
WebUI.delay(2)

//input data
WebUI.setText(findTestObject('Object Repository/Register/input_username'), username)
WebUI.setText(findTestObject('Object Repository/Register/input_password'), password)

WebUI.click(findTestObject('Object Repository/Register/button_signup'))
WebUI.verifyAlertPresent(3)

WebUI.closeBrowser()