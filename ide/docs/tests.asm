.text

addi $8, $0, 5
addi $9, $0, 8

beqLabel:
beq $8, $9, bneLabel 

bneLabel:
bne $8, $9, beqLabel
