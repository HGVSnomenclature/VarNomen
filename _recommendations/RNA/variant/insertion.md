---
layout: recommendation
parent: RNA
title: insertion
definition: 
    Insertion: a sequence change where, compared to the reference sequence, one or more nucleotides are inserted <b>and</b> where the insertion is not a copy of a sequence immediately 5'
discussion:
    Can I describe a variant as g.123insG?: No, since the description is not unequivocal it is not allowed. What does the description mean, the insertion of a G <b>at</b> position 123 or the insertion of a G <b>after</b> position 123?<br>The situation becomes even more complex when using a coding DNA reference sequence a "-" character is used, e.g. c.-14insG or c.456-13insG. In the description c.456-13insG, when the insertion is <b>after</b> intronic nucleotide c.456-13, is this position c.456-12 or c.456-14?
    Can I use the "^" character to describe an insertion?: No, insertions can not be described using the format g.123ˆ124insG or g.123ˆ124G. The recommendations try to restrict the number of different characters used to a minimum. Since a character was already used to indicate a range (the <i>underscore</i>) a new character was not required.
    How should I describe the change ATCG<b>ATCGATCGATCG</b>AGGGTCCC to ATCG<b>ATCGATCGATCG</b>A<b>ATCGATCGATC</b>GGGTCCC?  The fact that the inserted sequence (ATCGATCGATCG) is present in the original sequence suggests it derives from a duplicative event.: The variant should be described as an insertion; g.17_18ins5_16. A description using "dup" is not correct since, by definition, a duplication should be <b>directly 3'-flanking of the original copy</b> (in tandem). Note that the description given still makes it clear that the sequence inserted between g.17 and g.18 is probably derived from nearby, i.e. position g.5 to g.16, and thus likely derived from a duplicative event.
---