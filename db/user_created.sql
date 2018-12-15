insert into user_helo
(username, hash_value) 
values 
(
    $1, $2
)

RETURNING*;