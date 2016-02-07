---
layout: default
title: Standards
order: 3
---

# {{ page.title }}

* * * 

<a name ="DNAcode"></a>

## Nucleotides (DNA / RNA)

At DNA and RNA level HGVS nomenclature follows the _Nomenclature for Incompletely Specified Bases in Nucleic Acid Sequences_ ([see IUBMB (NC-IUB)](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html), specifying the description of nucleotides ([_see list_](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500)) and the NCBI standards for sequence files and database searches ([e.g. BLAST](http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml)).

* * * 

### **DNA**

{:.table .table-bordered}
| Symbol |    Meaning   |           Description           |
|:------:|:------------:|:-------------------------------:|
| A      | A            | Adenine                         |
| C      | C            | Cytosine                        |
| G      | G            | Guanine                         |
| T      | T            | Thymine                         |
| B      | C, G or T    | not-A (B follows A in alphabet) |
| D      | A, G or T    | not-C (D follows C in alphabet) |
| H      | A, C or T    | not-G (H follows G in alphabet) |
| K      | G or T       | Keto                            |
| M      | A or C       | aMino                           |
| N      | A, C, G or T | aNy                             |
| R      | A or G       | puRine                          |
| S      | G or C       | Strong interaction (3 H-bonds)  |
| V      | A, C or G    | not-T / not-U ( V follows U )   |
| W      | A or T       | Weak interaction (2 H-bonds)    |
| Y      | C or T       | pYrimidine                      |
|        |              |                                 |
| X*     | A, C, G or T | masked nucleotide               |
| -*     | none         | gap of indeterminate length     |

> *used in alignment only

* * * 

### **RNA**

{:.table .table-bordered}
| Symbol |    Meaning   |           Description           |
|:------:|:------------:|:-------------------------------:|
| a      | A            | Adenosine                       |
| c      | C            | Cytidine                        |
| g      | G            | Guanosine                       |
| u      | U            | Uridine                         |
| b      | c, g or u    | not-a (b follows a in alphabet) |
| d      | a, g or u    | not-c (d follows c in alphabet) |
| h      | a, c or u    | not-g (h follows g in alphabet) |
| k      | g or u       | keto                            |
| m      | a or c       | amino                           |
| n      | a, c, g or u | any                             |
| r      | a or g       | purine                          |
| s      | g or c       | strong interaction (3 H-bonds)  |
| v      | a, c or g    | not-u ( v follows u             |
| w      | a or u       | weak interaction (2 H-bonds)    |
| y      | c or u       | pyrimidine                      |

* * * 

<a name ="RNAcode"></a>

## Genetic Code

At the protein level HGVS nomenclature follows the _Nomenclature and Symbolism for Amino Acids and Peptides_ [_see IUPAC-IUB_](http://www.chem.qmul.ac.uk/iupac/AminoAcid/), specifying the description of amino acids ([_see list_](http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA1n2.html#AA1)). In addition HGVS nomenclature uses "**Ter**" (three-letter amino acid code) and "<b>*</b>" (three- and one-letter amino acid code) to indicate a translation termination (stop) codon. _**NOTE**_: in older versions the "**X** was used instead.
In the Table below, to support translation from a DNA sequence, we have used a "**T**" in the codons although in nature RNA is translated so the codons contain **U**'s.

<table class="table table-bordered text-center">
  <tr>
    <th colspan="6">Nucleotide position in codon</th>
  </tr>
  <tr>
    <td>First<br></td>
    <td colspan="4">Second</td>
    <td>Third</td>
  </tr>
  <tr>
    <td></td>
    <td><b>T</b></td>
    <td><b>C</b></td>
    <td><b>A</b></td>
    <td><b>G</b></td>
    <td></td>
  </tr>
  <tr class="active">
    <td rowspan="4"><b>T</b><br></td>
    <td>TTT - Phe</td>
    <td>TCT - Ser</td>
    <td>TAT - Tyr</td>
    <td>TGT - Cys</td>
    <td><b>T</b></td>
  </tr>
  <tr class="active">
    <td>TTC - Phe</td>
    <td>TCC - Ser</td>
    <td>TAC - Tyr</td>
    <td>TGC - Cys</td>
    <td><b>C</b></td>
  </tr>
  <tr class="active">
    <td>TTA - Leu</td>
    <td>TCA - Ser</td>
    <td>TAA - */Ter</td>
    <td>TGA - */Ter</td>
    <td><b>A</b></td>
  </tr>
  <tr class="active">
    <td>TTG - Leu</td>
    <td>TCG - Ser</td>
    <td>TAG - */Ter</td>
    <td>TGG - Trp</td>
    <td><b>G</b></td>
  </tr>
  <tr>
    <td rowspan="4"><b>C</b></td>
    <td>CTT - Leu</td>
    <td>CCT - Pro</td>
    <td>CAT - His</td>
    <td>CGT - Arg</td>
    <td><b>T</b></td>
  </tr>
  <tr>
    <td>CTC - Leu</td>
    <td>CCC - Pro</td>
    <td>CAC - His</td>
    <td>CGC - Arg</td>
    <td><b>C</b></td>
  </tr>
  <tr>
    <td>CTA - Leu</td>
    <td>CCA - Pro</td>
    <td>CAA - Gln</td>
    <td>CGA - Arg</td>
    <td><b>A</b></td>
  </tr>
  <tr>
    <td>CTG - Leu</td>
    <td>CCG - Pro</td>
    <td>CAG - Gln</td>
    <td>CGG - Arg</td>
    <td><b>G</b></td>
  </tr>
  <tr class="active">
    <td rowspan="4"><b>A</b></td>
    <td>ATT - Ile</td>
    <td>ACT - Thr</td>
    <td>AAT - Asn</td>
    <td>AGT - Ser</td>
    <td><b>T</b></td>
  </tr>
  <tr class="active">
    <td>ATC - Ile</td>
    <td>ACC - Thr</td>
    <td>AAC - Asn</td>
    <td>AGC - Ser</td>
    <td><b>C</b></td>
  </tr>
  <tr class="active">
    <td>ATA - Ile</td>
    <td>ACA - Thr</td>
    <td>AAA - Lys</td>
    <td>AGA - Arg</td>
    <td><b>A</b></td>
  </tr>
  <tr class="active">
    <td>ATG - Met</td>
    <td>ACG - Thr</td>
    <td>AAG - Lys</td>
    <td>AGG - Arg</td>
    <td><b>G</b></td>
  </tr>
  <tr>
    <td rowspan="4"><b>G</b></td>
    <td>GTT - Val</td>
    <td>GCT - Ala</td>
    <td>GAT - Asp</td>
    <td>GGT - Gly</td>
    <td><b>T</b></td>
  </tr>
  <tr>
    <td>GTC - Val</td>
    <td>GCC - Ala</td>
    <td>GAC - Asp</td>
    <td>GGC - Gly</td>
    <td><b>C</b></td>
  </tr>
  <tr>
    <td>GTA - Val</td>
    <td>GCA - Ala</td>
    <td>GAA - Glu</td>
    <td>GGA - Gly</td>
    <td><b>A</b></td>
  </tr>
  <tr>
    <td>GTG - Val</td>
    <td>GCG - Ala</td>
    <td>GAG - Glu</td>
    <td>GGG - Gly</td>
    <td><b>G</b></td>
  </tr>
</table>

* * * 

<a name ="aacode"></a>

## Amino Acid Descriptions

At the protein level HGVS nomenclature follows the _Nomenclature and Symbolism for Amino Acids and Peptides_ [_see IUPAC-IUB_](http://www.chem.qmul.ac.uk/iupac/AminoAcid/), specifying the description of amino acids ([_see list_](http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA1n2.html#AA1)). In addition HGVS nomenclature uses "**Ter**" (three-letter amino acid code) and "<b>*</b>" (three- and one-letter amino acid code) to indicate a translation termination (stop) codon. _**NOTE**_: in older versions the "**X** was used instead.
In the Table below, to support translation from a DNA sequence, we have used a "**T**" in the codons although in nature RNA is translated so the codons contain **U**'s.

{:.table .table-bordered}
| One Letter Code | Three Letter Code |          Amino Acid         |             Possible Codons             |                Systemic Name                |              Formula              |
|:---------------:|:-----------------:|:---------------------------:|:---------------------------------------:|:-------------------------------------------:|:---------------------------------:|
| A               | Ala               | Alanine                     | GCA, GCC, GCG, GCT                      | 2-Aminopropanoic acid                       | CH3-CH(NH2)-COOH                  |
| B               | Asx               | Aspartic acid or Asparagine | AAC, AAT, GAC, GAT                      |                                             |                                   |
| C               | Cys               | Cysteine                    | TGC, TGT                                | 2-Amino-3-mercaptopropanoic acid            | HS-CH2-CH(NH2)-COOH               |
| D               | Asp               | Aspartic acid               | GAC, GAT                                | 2-Aminobutanedioic acid                     | HOOC-CH2-CH(NH2)-COOH             |
| E               | Glu               | Glutamic acid               | GAA, GAG                                | 2-Aminopentanedioic acid                    | HOOC-[CH2]2-CH(NH2)-COOH          |
| F               | Phe               | Phenylalanine               | TTC, TTT                                | 2-Amino-3-phenylpropanoic acid              | C6H5-CH2-CH(NH2)-COOH             |
| G               | Gly               | Glycine                     | GGA, GGC, GGG, GGT                      | Aminoethanoic acid                          | CH2(NH2)-COOH                     |
| H               | His               | Histidine                   | CAC, CAT                                | 2-Amino-3-(1H-imidazol-4-yl)-propanoic acid | ![Histidine](/assets/AA/histidine.gif)     |
| I               | Ile               | Isoleucine                  | ATA, ATC, ATT                           | 2-Amino-3-methylpentanoic acid              | C2H5-CH(CH3)-CH(NH2)-COOH         |
| K               | Lys               | Lysine                      | AAA, AAG                                | 2,6-Diaminohexanoic acid                    | H2N-[CH2]4-CH(NH2)-COOH           |
| L               | Leu               | Leucine                     | CTA, CTC, CTG, CTT, TTA, TTG            | 2-Amino-4-methylpentanoic acid              | (CH3)2CH-CH2-CH(NH2)-COOH         |
| M               | Met               | Methionine                  | ATG (translation initiation)            | 2-Amino-4-(methylthio)butanoic acid         | CH3-S-[CH2]2-CH(NH2)-COOH         |
| N               | Asn               | Asparagine                  | AAC, AAT                                | 2-Amino-3-carbamoylpropanoic acid           | H2N-CO-CH2-CH(NH2)-COOH           |
| P               | Pro               | Proline                     | CCA, CCC, CCG, CCT                      | Pyrrolidine-2-carboxylic acid               | ![Proline](/assets/AA/proline.gif)       |
| Q               | Gln               | Glutamine                   | CAA, CAG                                | 2-Amino-4-carbamoylbutanoic acid            | H2N-CO-[CH2]2-CH(NH2)-COOH        |
| R               | Arg               | Arginine                    | AGA, AGG, CGA, CGC, CGG, CGT            | 2-Amino-5-guanidinopentanoic acid           | H2N-C(=NH)-NH-[CH2]3-CH(NH2)-COOH |
| S               | Ser               | Serine                      | AGC, AGT, TCA, TCC, TCG, TCT            | 2-Amino-3-hydroxypropanoic acid             | HO-CH2-CH(NH2)-COOH               |
| T               | Thr               | Threonine                   | ACA, ACC, ACG, ACT                      | 2-Amino-3-hydroxybutanoic acid              | CH3-CH(OH)-CH(NH2)-COOH           |
| U               | Sec               | Selenocysteine              | TGA                                     |                                             | H2N-CH(COOH)--CH2-SeH             |
| V               | Val               | Valine                      | GTA, GTC, GTG, GTT                      | 2-Amino-3-methylbutanoic acid               | (CH3)2CH-CH(NH2)-COOH             |
| W               | Trp               | Tryptophan                  | TGG                                     | 2-Amino-3-(lH-indol-3-yl)-propanoic acid    | ![Tryptophan](/assets/AA/tryptophan.gif)    |
| X               | Xaa               | unknown or 'other'          | NNN                                     |                                             |                                   |
| Y               | Tyr               | Tyrosine                    | TAC, TAT                                | 2-Amino-3-(4-hydroxyphenyl)-propanoic acid  | ![Tyrosine](/assets/AA/tyrosine.gif)      |
| Z               | Glx               | Glutamic acid or Glutamine  |                                         |                                             |                                   |
| *               | *                 | Termination                 | TAA, TAG, TGA (translation termination) | HGVS addition (V2.0)                        |                                   |

