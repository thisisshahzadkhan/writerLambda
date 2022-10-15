# writerLambda

For invoking the Lambda the command would be like this <br/>
`aws lambda invoke --function-name "writeUser" --endpoint-url "http://127.0.0.1:3001" --no-verify-ssl out.txt` (depending on local env)

For Starting Lambda.. <br/>
`sam local start-lambda --host 0.0.0.0 -p 3001 2>&1 | tr \"\\r\" \"\\n\"`
