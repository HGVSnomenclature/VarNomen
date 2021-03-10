---
layout: recommendation
parent: DNA
title: complex (HGVS/ISCN)
definition: 
    Complex: a sequence change where, compared to a reference sequence, a range of changes occur that can not be described as one of the basic variant types (substitution, deletion, duplication, insertion, conversion, inversion, deletion-insertion, or repeated sequence).
discussion:
    Is the description NM_04006.1:c.123+45_123+51TSDinsL1.603bp acceptable (TSD = target site duplication, insL1 indicates the nature of the insert (L1, Alu or SVA), 603bp = the number of inserted base pairs)?: No, not realy, it is not exact. Following HGVS recommendations the description should be like NG_012232.1(NM_004006.1):c.123+45_123+51dupinsXXXXXX.x:g.393_1295. So give a genomic reference sequence to describe the intronic variant, use "dup" (not "TSD") and exactly describe the insertion, not like "insL1.603bp". In the example XXXXXX.x is a GenBank file (accession.version number) containing the inserted L1 sequence (nucleotides g.393_1295).
---
