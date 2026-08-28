#-----------------------------------------------------
# Some usefull instructions...
#
BIBLIO=biblio.bib
PUBLIS=content/publication
#-----------------------------------------------------

# Generate articles from Bibtex entries. 
# pip3 install -U academic
biblio: 
	@echo '==> Generating publication entries'
	academic import --bibtex -v $(BIBLIO) $(PUBLIS) 

clean:
	hugo mod clean
	hugo mod get -u ./...
	git config http.postBuffer 524288000

site:
	hugo

synchro-pull:
	git pull origin main
	git pull github main

synchro-push:
	git push origin main
	git push github main
	git remote update

deploy: public/index.html
	@echo "========================================"
	@echo "==> Deploy updates "
	#       rake && git commit -am ":memo: Deploy updates"; git pull; git push
	hugo && git commit -am "🤖 DEPLOY: last updates"; git pull; git push

# -----------------------------------------------------
# Journées nationales
#
# Crée la structure d'une nouvelle édition à partir des
# templates. Usage :
#
#   make new-journee EDITION=2027-2028
#
# Génère data/journees_editions/2027-2028.yml et
# content/journees/2027-2028/_index.md. La nouvelle édition
# apparaît alors automatiquement dans le menu "Journées" et
# dans l'archive /journees/.
# -----------------------------------------------------
EDITION ?=

# Extrait l'année de départ (A) et de fin (B) de "2027-2028".
_A = $(word 1,$(subst -, ,$(EDITION)))
_B = $(word 2,$(subst -, ,$(EDITION)))
# Libellé court : "2027–28".
_LABEL = $(_A)–$(shell printf '%s' "$(_B)" | tail -c 2)

new-journee:
	@[ -n "$(EDITION)" ] || (echo "Usage: make new-journee EDITION=2027-2028" && exit 1)
	@echo "$(EDITION)" | grep -Eq '^[0-9]{4}-[0-9]{4}$$' \
		|| (echo "EDITION doit ressembler à 2027-2028" && exit 1)
	@test -d content/journees/$(EDITION) \
		&& echo "L'édition $(EDITION) existe déjà." && exit 1 \
		|| true
	@mkdir -p content/journees/$(EDITION)
	@sed -e 's/2027-2028/$(EDITION)/g' -e 's/2027–28/$(_LABEL)/g' \
		data/journees_editions/_template.yml \
		> data/journees_editions/$(EDITION).yml
	@sed -e 's/2026-2027/$(EDITION)/g' -e 's/2026–27/$(_LABEL)/g' \
		-e 's/draft: true/draft: false/' \
		content/journees/_template/_index.md \
		> content/journees/$(EDITION)/_index.md
	@echo "==> Édition $(EDITION) créée :"
	@echo "     data/journees_editions/$(EDITION).yml"
	@echo "     content/journees/$(EDITION)/_index.md"
	@echo "Renseignez la fiche (date, lieu, programme…) puis lancez 'make serve'."
	@echo "L'édition apparaîtra automatiquement dans le menu et l'archive."
