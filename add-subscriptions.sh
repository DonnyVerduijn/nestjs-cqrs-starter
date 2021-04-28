#!/bin/sh

curl -L -X PUT "http://eventstore:2113/subscriptions/%24svc-user/account" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" \
  -d "{}"

curl -L -X PUT "http://eventstore:2113/subscriptions/%24svc-account/user" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" \
  -d "{}"