---
layout: default-md
title: Open Issues
order: 8
---

# {{page.title}}

* * *

## Community Consultation

Proposal [_SVD-WG006 (circular DNA)_](/bg-material/consultation/svd-wg006/) suggesting to extend the HGVS recommendations to allowing a “o.” prefix for circular genomic reference sequences is currently open for Community Consulation (**Closing:** Oct.30 (2018).

* * *

<a name ="opentopics"></a>

## Ongoing discussions

For closed topics [see below](/recommendations/open-issues#closedtopics).

<a name ="extensions"></a>

### Protein Extensions

Would you consider a small change in the suggested nomenclature for the [_description of extensions_](/recommendations/protein/variant/extension/) from p.\*110Glnext\*17 to p.\*110Glnext17? (_Yael Shinar, Tel Hashomer, Israel_)

The description of extensions can probably indeed be simplified. While for **extensions** we currently give the position of the new translation initiation (start) codon as "-5" or of the termination (stop) codon as "\*17" this is strictly speaking not necessary. By defenition the extension goes upstream for an N-terminal change and downstream for a C-terminal change. Using p.Met1ext5 (now p.Met1ext-5) and p.\*110Glnext17 (now p.\*110Glnext\*17) therefore seems sufficient.

<a name ="circular"></a>

### Circular molecules

July 19 (2016) - JT den Dunnen
HGVS nomenclature assumes reference sequences are linear. However, the mitochondrial genome and many other DNA molecules (plasmids, viral genomes) are circular. How should one describe a variant involving the "first" and "last" nucleotides of the circular molecule?  For now the suggestion is to describe the variant as m.[1del;16569del]. The question is whether m.16569_1del should be allowed (NOTE: includes an exception to the rule that in Y\_Xdel X should be smaller then Y). Do you have a suggestion??

<a name ="modifications"></a>

### Modifications

Aug.24 (2011) - JT den Dunnen
HGVS nomenclature does currently not have recommendations for the descriptions of modifications of DNA, RNA or protein molecules. The most pressing need for a recommendation is are DNA methylation and RNA editing. Proposal [_SVD-WG005 (gom/lom)_](/bg-material/consultation/svd-wg005/) makes a start to get recommendations on this topic. SVD-WG005 introduces the use of the “|” character (“pipe”) to indicate that not a direct change of the sequence is described but a modification (change of state).

#### RNA editing

Addition of RNA editing data to a DNA variant database seems a sensible thing to do. An RNA-based sequencing study might reveal an interesting variant which, when checked in the database, is listed (...RNA editing data is not recorded). This will trigger a DNA sequencing experiment, trying to confirm the variant, which will fail since the variant is not present at the DNA level and valuable resources are spoiled.

The suggestion is to describe RNA editing using "**|@**";

*	g.1287\|@ (based on a genomic reference sequence)
*	c.143\|@ (based on a coding DNA reference sequence)
*	n.143\|@ (based on a non-coding DNA reference sequence)
*	r.143c>u on RNA level
*	p.(His48Pro) on protein level (i.e. the predicted consequence)

The use of the "**@**" character versus other characters (&, $, ~, #) is of course debatable. Another option is to use a three-letter abbreviation like "del" and "ins", e.g. "**edt**" (g.1287C\|edt, c.143C\|edt) but this is seems less attractive (longer and potentially confusing). The "**@**" should serve as a simple mark, indicating 'note this site, something is happening at ("**@**") this position.

Using the description r.143c>u on RNA level suggests a substitution. There are several types of RNA editing and "r.143c" probably does not really change to a "u". All we can say is that the polymerases used to make a copy inserted an "a". At some point we probably need to suggest ways to exactly describe the chemical modification made by the RNA editing enzyme but we can do that later. Making such recommendations can then be combined with those for DNA modifications (like methylation with methyl or hydroxy-methyl groups) making sure they follow the same rules.

The question is whether we need a specific description at the DNA level indicating that the nucleotide is known to be modified at RNA level. The main purpose of this mark would be to facilitate easy database retrieval of such sites. Approval of proposal [_SVD-WG001_](/bg-material/consultation/svd-wg001/) more or less opened the option for such marks.

<a name ="exonnumbering"></a>

### Exon Numbering

HGVS nomenclature does not give specific recommendations for the **numbering of exons**. For variant descriptions exon numbers are not required, **nucleotide position are sufficient**. In many genes there is no consensus on exon/intron numbering and several old numbering schemes may exist that had to be revised to include newly discovered exons (internal as well as 5' and/or 3' of the gene). This led to all kinds of numbering schemes with no clear structure, making it very difficult for non-experts in the specific gene to keep track of all details (see also [Dalgleish 2010](http://www.genomemedicine.com/content/pdf/gm145.pdf){:target= "_blank"} and [NCBI RefSeqGene](http://www.ncbi.nlm.nih.gov/refseq/rsg/faq/#exon){:target= "_blank"}). To prevent confusion and with the increasing use of genome browsers, numbering exons simply as 1, 2, 3, etc., from start to the end is the only logical option.
	Although this is probably difficult to accept by the experts, we can not keep on confusing newcomers by forever using legacy numbering systems. We should realize that, at some point, wrong assumptions will be made with as a consequence a patient will receive an erroneous diagnosis. This is of course unacceptable.

*	The CBS gene was originally thought to contain 16 exons. Later it was recognised that exon 15 does not exist, and recently two additional non-translated 5' exons were detected. The current gene structure therefore includes 17 exons, of which exons 3 to 17 are translated. Should the exons of a gene be counted from the exon that contains the start codon rather than the beginning of the cDNA?  If so, should exons preceding the start codon be counted 0, -1, -2, etc. or should the 0 be skipped?  Is there an agreement on how to deal with changes in exon numbering?
	:	For the description of sequence changes it does not matter how exons are numbered,  exon (and intron) numbers are not used in the descriptions, only nucleotide positions. For exon numbering the only logical thing to do is to start with 1 for the first exon and number all following exons successively. Using other numbering schemes problems will emerge at some point. Note that when alternative numbering schemes are used, these will only be recognised by experts in the field knowing their history; newcomers just blindly assume that the first exon annotated in the genome is exon 1. Consequently, when legacy numbering schemes are used, this will cause confusion and at some point wrong assumptions will be made and a patient might end up with an erroneous diagnosis. In papers, when used, specifically mention how exons were numbered (M&M, Figure and Table legends). For tables, consider to add a column listing the historic / old exon numbers.


* * *

<a name ="closedtopics"></a>

## Closed topics

<a name ="imperfectcopy"></a>

### Imperfect copies

<font color="#FF0000">The proposal has been REJECTED</font>
Accepting the proposal, without a whole range of specifications, would add **too many** options to decribe specific variants.

HGVS nomenclature has excellent possibilities to describe large duplications, inversions, conversions and insertions. However, no clear recommendations are available what to do when the nucleotides involved are not a perfect copy of the original sequence. The suggestion has been made ([_Taschner PEM, Den Dunnen JT (2011). Hum.Mutat. 32:507-511_](http://onlinelibrary.wiley.com/doi/10.1002/humu.21427/pdf) to use "**{ }**" (curly braces) as a kind of "_sub-alleles_" to describe the variants in the altered region.
*	g.24\_65dup{46G>T}
	:	a duplication of nucleotides g.24 to g.65 with variant g.46G>T in the duplicated copy.
After careful consideration the decision was made **not to accept** this proposal. The proposal would introduce a kind of "nesting" which is very diifcult to control. 

<a name ="geneflanking"></a>

### Numbering gene flanking nucleotides

<font color="#FF0000">The proposal has been REJECTED</font>
The current recommendation to describe variants based on a coding DNA reference sequence is to use "c.-" numbers for nucleotides 5' of the ATG translation initiation codon and "c.\*" numbers for nucleotides 3' of the translation termination codon [_see Numbering_](/bg-material/numbering/). However, such descriptions do not show whether the nucleotides are **inside or outside** the transcribed region. The request has been filed (_PEM Taschner, Leiden, Nederland_) to make a discrimination between transcribed and un-transcribed nucleotides using the format;

*	c.-N-uM  =  nucleotide uM is at position -M upstream (u) of nucleotide c.-N, the transcription initiation site (cap-site) of the reference transcript, e.g. c.-237-u29A>G (currently c.-266A>G)
	:	_**NOTE**_:	restricted to nucleotides 5' of the transcription initiation site (cap site), i.e. upstream of the gene (incl. the promoter)
*	c.\*N+dM  =  nucleotide dM is at position +M downstream (d) of nucleotide c.\*N, the polyA-addition site of the reference transcript, e.g. \*237+d133A>G (currently c.\*370A>G)
	:	_**NOTE**_:	restricted to nucleotides 3' of the polyA-addition site, i.e. downstream of the gene

This proposal has been rejected since: (i) genes often have several transcription initiation sites as well as polyA-addition sites, (ii) the transcription initiation (cap-site) is often ill-defined, (iii) variants that lie outside of a transcript can not be described based on a coding DNA reference sequence (c.), it does not contain the reference nucleotide, and should be described based on a gene or chromosome reference sequence. Use NC\_000023.10:g.33229820A>G or LRG\_199t1:c.-391T>C **and not** NC\_000023.10(NM\_004006.2):c.-244-u147T>C, LRG\_199t1:c.-244-147T>C or similar descriptions. 
