.data 

.text

main:   lui $4, 0x1001
	addi $2, $0, 5
	addi $6, $0, 8
	addi $7, $0, 3
	jal EndPxy
	lui $8, 0x00ff
	sw $8, 0($2)
	j finish
	
EndPxy: mul $8, $5, $6
	add $8, $8, $7
	sll $8, $8, 2
	add $2, $8, $4
	jr $31
	

finish: addi $2, $0, 10
	syscall
