---
date: '2026-04-30T09:13:34+02:00'
draft: false
title: 'Webinar 2026 05'
type: "page"
---

## Informations utiles

- Horaire: **Mercredi 6 mai 2026, 17h00-18h00 (CEST)**
- Orateur: **Rishikesh Vaishnav**
- Titre: **Translating Proofs from Lean to Dedukti**
- Lien: https://visio.numerique.gouv.fr/kbq-wtjp-rpv

## Abstract

Proof assistants are software tools that enable the precise expression of
mathematical objects, properties, and proofs, including automation that checks
the validity of proofs with respect to specific theorem statements. Proof
assistants often feature a high degree of expressivity, allowing users to
formally state and verify many interesting results, spanning from foundational
to research-level mathematics. Many proof assistants have been developed over
the years, with each of them being based on different theories and having their
own communities and mathematical libraries, with interoperability between these
various systems remaining an open challenge.

This talk concerns the topic of translating proofs from the Lean proof assistant
to the logical framework known as Dedukti. Lean is a proof assistant developed
by the Lean FRO that has become quite popular with mathematicians in recent
years, with its "mathlib" library containing a large and growing body of
formalized mathematics. Lean's type theory is based on the Calculus of
Constructions with inductive types, taking closely after the proof assistant
Rocq. Dedukti is a logical framework designed to facilitate the export of proofs
between different systems, with a type theory based on the lambda-pi calculus
with rewrite rules. We discuss the theoretical foundations behind our
translation from Lean to Dedukti, in particular the encoding of Lean's infinite
universe hierarchy, type/universe level polymorphism, and various definitional
equalities within Dedukti. Of particular interest is our handling of Lean's
support for definitional proof irrelevance and other related features, which we
choose to eliminate via a pre-translation step based on a translation from
extensional to intensional type theory.
