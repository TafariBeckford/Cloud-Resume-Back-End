
resource "aws_dynamodb_table_item" "table" {
  table_name = aws_dynamodb_table.table.name
  hash_key   = aws_dynamodb_table.table.hash_key

  item = <<ITEM
{
  "users": {"S":" "},
  "usercount": {"S":" "}
}
ITEM
}

resource "aws_dynamodb_table" "table" {
  name           = "usertable"
  read_capacity  = 10
  write_capacity = 10
  hash_key       = "users"

  attribute {
    name = "users"
    type = "S"
  }
}
