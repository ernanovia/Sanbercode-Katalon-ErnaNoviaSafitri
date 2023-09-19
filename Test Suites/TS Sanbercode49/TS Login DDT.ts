<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS Login DDT</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>bb0b6a4c-209f-4e0b-9c8d-a71b665e66ed</testSuiteGuid>
   <testCaseLink>
      <guid>fd4c4368-84ba-4e3d-b9ff-2310eee66548</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Auth/Login/Login Success</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>801cbde7-71c4-430d-bc92-74cf410a261d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Auth/Login/Login Failed</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>d2e78506-2ed3-4825-8f45-bc714d03980f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/DataSanbercode/LoginData-Excel</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>d2e78506-2ed3-4825-8f45-bc714d03980f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>b3288df3-60e2-47e4-9054-f66657b295e0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>d2e78506-2ed3-4825-8f45-bc714d03980f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>0682d9d1-9bb6-428a-b9c2-b34107688cc2</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
