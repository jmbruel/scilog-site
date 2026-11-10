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
# Crée le dossier d'une nouvelle édition. Usage :
#
#   make new-journee EDITION=2027
#
# Copie le modèle archetypes/journee/ vers content/journees/2027/
# (index.md, programme.yaml, intervenants.yaml, comite.yaml,
# partenaires.yaml). L'édition apparaît automatiquement dans le
# menu "Journées" et dans l'archive /journees/.
# Guide : docs/journees-annuelles.md
# -----------------------------------------------------
EDITION ?=

new-journee:
	@[ -n "$(EDITION)" ] || (echo "Usage: make new-journee EDITION=2027" && exit 1)
	@echo "$(EDITION)" | grep -Eq '^[0-9]{4}$$' \
		|| (echo "EDITION doit être une année, par exemple 2027" && exit 1)
	@! test -d content/journees/$(EDITION) \
		|| (echo "L'édition $(EDITION) existe déjà." && exit 1)
	@hugo new content --kind journee journees/$(EDITION) >/dev/null
	@echo "==> Édition $(EDITION) créée dans content/journees/$(EDITION)/"
	@echo "Renseignez index.md et les fichiers .yaml, puis lancez 'hugo server'."

serve:
	hugo server
