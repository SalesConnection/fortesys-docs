---
sidebar_position: 2
authors: jay
title: Create Attachment Flow
---

# Create Attachment Flow

1. Fetch the ServiceCall to check and see if there is any `AttachmentEntry` or not. If `AttachmentEntry` exists, follow step in 1.1, otherwise follow step 1.2

1.1 Call PATCH attachment API with the following structure. Set the `U_Remark` as either *UAT* or *SR*, and set `U_Link` 

`PATCH /b1s/v1/Attachments2({AttachmentEntry})`
```
{
    "Attachments2_Lines": [
        {
            "SourcePath": "C:\\Users\\munkit\\Desktop",
            "FileName": "SalesConnection_Attachments Update.txt",
            "FileExtension": "txt",
            "AttachmentDate": "2024-04-02",
            "Override": "tYES",
            "FreeText": null,
            "CopyToTargetDoc": "tNO",
            "U_Remark": "UAT",          <----
            "U_Link": "www.google.com", <----
            "U_DocVerify": "Pending",
            "U_DocVerifyRemark": null
        },
        {
            "SourcePath": "C:\\Users\\munkit\\Desktop",
            "FileName": "SalesConnection_Attachments Update.txt",
            "FileExtension": "txt",
            "AttachmentDate": "2024-04-02",
            "Override": "tYES",
            "FreeText": null,
            "CopyToTargetDoc": "tNO",
            "U_Remark": "SR",           <----
            "U_Link": "www.google.com", <----
            "U_DocVerify": "Pending",
            "U_DocVerifyRemark": null
        }
    ]
}
```

1.2 Call POST attachment API with the following structure. Set the `U_Remark` as either *UAT* or *SR*, and set `U_Link` accordingly.

`POST /b1s/v1/Attachments2`
```
{
    "Attachments2_Lines": [
        {
            "SourcePath": "C:\\Users\\munkit\\Desktop",
            "FileName": "SalesConnection_Attachments Update.txt",
            "FileExtension": "txt",
            "AttachmentDate": "2024-04-02",
            "Override": "tYES",
            "FreeText": null,
            "CopyToTargetDoc": "tNO",
            "U_Remark": "UAT",          <----
            "U_Link": "www.google.com", <----
            "U_DocVerify": "Pending",
            "U_DocVerifyRemark": null
        },
        {
            "SourcePath": "C:\\Users\\munkit\\Desktop",
            "FileName": "SalesConnection_Attachments Update.txt",
            "FileExtension": "txt",
            "AttachmentDate": "2024-04-02",
            "Override": "tYES",
            "FreeText": null,
            "CopyToTargetDoc": "tNO",
            "U_Remark": "SR",           <----
            "U_Link": "www.google.com", <----
            "U_DocVerify": "Pending",
            "U_DocVerifyRemark": null
        }
    ]
}
```

From the POST attachment API, it will return `AbsoluteEntry` and call the PATCH service call API to link attachment and service call together

`PATCH /b1s/v1/ServiceCalls({ServiceCallID})`
```
{
    "AttachmentEntry": [AbsoluteEntry]
}
```

