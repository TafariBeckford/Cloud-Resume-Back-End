# importing packages
import json
import boto3


# function definition
def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    # table name
    table = dynamodb.Table('usertable')
    # inserting values into table
    response = table.update_item(
        Key={
            "users": "user"

        },
        UpdateExpression='ADD usercount :inc',
        ExpressionAttributeValues={
            ':inc': 1
        },
        ReturnValues="UPDATED_NEW"
    )
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",  # Allow only GET request
        },
        "body": int(response["Attributes"]["usercount"]),

    }
