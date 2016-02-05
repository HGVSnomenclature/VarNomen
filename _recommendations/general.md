---
layout: default-md
title: General
order: 1
---

# {{page.title}}


* * *

### General recommendations

* all variants should be described at the most basic level, **the DNA level**. Descriptions at the RNA and/or protein level may be given in addition.
    * descriptions should make clear whether the change was **experimentally determined** or **theoretically deduced** (predicted). 
* all variants should be described in relation to an accepted **reference sequence** ([_see Reference Sequences_](/bg-material/refseq)).
	* a **letter prefix** should be used to indicate the reference sequence used. Accepted prefixes are;
		* "**g.**" for a genomic reference sequence
		* "**m.**" for a mitochondrial reference sequence
		* "**c.**" for a coding DNA reference sequence	
		* "**n.**" for a non-coding reference sequence
		* "**r.**" for an RNA reference sequence
		* "**p.**" for a protein reference sequence
    * the reference sequence file used should be **public and clearly described**, e.g. NC_000023.10, LRG_199, NG_012232.1, ENST00000357033, NM_004006.2, etc.
    	* when variants are not reported in relation to a genomic reference sequence based on a recent genome build, the preferred reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
    	* when no LRG is available, one should be requested ([_see Reference Sequences_](/bg-material/refseq)).
    * the reference sequence used must contain the residue(s) described to be changed. 
* numbering of the residues (nucleotide or amino acid) in relation to the reference sequence used should **follow the approved scheme** ([_see Numbering_](/bg-material/numbering))
* for a clear distinction, descriptions at DNA, RNA and protein level are **unique** and ;
	* **DNA-level**: in capitals, starting with a number referring to the first nucleotide affected and using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); g.12345A>T, [_see DNA_](/recommendations/DNA))
	* **RNA-level**: in lower-case, starting with a number referring to the first nucleotide affected and using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); r.76a>u [_see RNA_](/recommendations/RNA))
	* **protein level**: in capitals, starting with a letter referring to first the amino acid affected and using [IUPAC-IUBMB assigned amino acid symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); p.Lys76Asn, [_see protein_](/recommendations/protein)))
* **3'rule**: for all descriptions the most 3' position possible is arbitrarily assigned to have been changed
	* the 3'rule also applies for changes in single residue stretches or tandem repeats  (nucleotide or amino acid)
* in HGVS nomenclature some characters are used for specific purposes;
	* an "**_**" (underscore) is used to indicate a range (like g.12345_12678del or c.123_124insG)
	* "[]" (angled brackets) are used for alleles ( (for detailes see [_DNA_](/recommendations/DNA/variant/more), [_RNA_](/recommendations/RNA/variant/more), [_protein_](/recommendations/protein/variant/more))
	* "()" (parentheses) are used to indicate uncertainties, e.g. when the exact position of a change is not known
		* the range of the uncertainty is described as precisely as possible and listed between parentheses; c.(67_70)insG
		
	* "=" (equals) is used to indicate a sequence was tested but not changed; g.12345A=, r.456C=, P.Arg234=
* different formats are used to describe different types of variants;
	* "**>**" indicates a **substitution** at DNA and RNA level; g.12345A>T, r.123a>u (for details see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
		* a substitution at the protein level is described as p.Ser321Arg (see [_protein_](/recommendations/protein/variant/substitution)) 
	* "**del**" indicates a **deletion**; c.76delA (for detailes see [_DNA_](/recommendations/DNA/variant/deletion), [_RNA_](/recommendations/RNA/variant/deletion), [_protein_](/recommendations/protein/variant/deletion))
	* "**dup**" indicates a **duplication**; c.76dupA (for detailes see [_DNA_](/recommendations/DNA/variant/duplication), [_RNA_](/recommendations/RNA/variant/duplication), [_protein_](/recommendations/protein/variant/duplication))
	* "**ins**" indicates an **insertion**; c.76_77insG (for detailes see [_DNA_](/recommendations/DNA/variant/insertion), [_RNA_](/recommendations/RNA/variant/insertion), [_protein_](/recommendations/protein/variant/insertion))
	
		* duplicating insertions are described as duplications, not as insertions	
	* "**inv**" indicates an **inversion**; c.76_83inv (for detailes see [_DNA_](/recommendations/DNA/variant/inversion), [_RNA_](/recommendations/RNA/variant/inversion))
	
	* "**con**" indicates a **conversion**; c.123_678conNM_004006.1:c.123_678 (for detailes see [_DNA_](/recommendations/DNA/variant/conversion), [_RNA_](/recommendations/RNA/variant/conversion), [_protein_](/recommendations/protein/variant/conversion))

* when describing genes or proteins, only **approved [HGNC gene symbols](http://www.genenames.org)** should be used.

* * *

### Terminology 

#### Mutation and polymorphism

In some disciplines the term**"mutation"** is used to indicate "_a change_" while in other disciplines it is used to indicate "_a disease-causing change_". Similarly, the term **"polymorphism"** is used both to indicate "_a non disease-causing change_" or "_a change found at a frequency of 1% or higher in the population_". To prevent this confusion we do not use the terms mutation and polymorphism (including SNP or Single Nucleotide Polymorphism) but use neutral terms like **"sequence variant"**, **"alteration"** and **"allelic variant"**. The Vol.19(1) issue of Human Mutation (2002) contains several contributions discussing these issues as well as the fact that the term **"mutation"** has developed a negative connotation (see [Cotton RGH - p.2](http://onlinelibrary.wiley.com/doi/10.1002/humu.10029/pdf), [Condit CM et al. - p.69](http://onlinelibrary.wiley.com/doi/10.1002/humu.10023/pdf) and [Marshall JH - p.76](http://onlinelibrary.wiley.com/doi/10.1002/humu.10021/pdf)). Current guidelines of authorative organisations now also recommend to use neutral terms like "**variant**" and "**change**" only (see [Richards 2015, Genet.Med. 17:405-424](http://www.nature.com/gim/journal/v17/n5/pdf/gim201530a.pdf)).

#### Pathogenic

Another confusing term used frequently is "a **pathogenic** variant". While a non-expert concludes the variant described "_causes disease_", the expert probably means "_causes disease when in a specific context_"

*   causes disease when found in a male (X-linked recessive disorder)
*   causes disease when combined with a similar chance in the other allele (autosomal recessive)
*   causes disease when inherited from the father (imprinted)

To prevent confusion it therefore seems best not to use the term "_pathogenic_". A good alternative seems a neutral term like "**affects function**". In fact this properly describes what one actually means, the variant affects the normal function of the gene/protein (in whatever way). This also solves the issue of what term to use for non-disease phenotypes like skin/hair/eye colour or blood group. In such cases it is problematic to choose the phenotype to call "_normal_" or "_pathogenic_". Using "**affects function**" is clear and effective. To classify variants people use most frequently 5 categories. Based on affects function these could be; _affects funtcion,  probably affects function,  unknown,  probably does not affect function (or probably no functional effect),  does not affect function (no functional effect)_. Variants for which a functional effect is unknown can together be called "**variants of unknown significance**" (**VUS**).