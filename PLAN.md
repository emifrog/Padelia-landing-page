Voici chaque problème avec la correction exacte à appliquer.

---

## Problème 1 — Compteurs à zéro (critique)

**Ce que voit le visiteur :** "0+ Joueurs inscrits · 0+ Matchs organisés · 0+ Clubs partenaires · 0% Satisfaction"

**Pourquoi c'est destructeur :** c'est la section juste après les mockups — le moment où le visiteur est le plus engagé. Tu lui montres une app séduisante, puis tu lui dis que personne ne l'utilise. C'est l'équivalent d'un restaurant vide avec la vitrine ouverte.

**Correction — option A (recommandée) :** remplace par des métriques produit qui ne dépendent pas des utilisateurs.

Remplace :
- "0+ Joueurs inscrits" → "5 critères de matching"
- "0+ Matchs organisés" → "20 badges à débloquer"
- "0+ Clubs partenaires" → "Classement ELO en temps réel"
- "0% Satisfaction" → "100% gratuit, sans pub"

**Correction — option B :** retire la section entièrement. Ajoute un script qui réactive la section automatiquement quand tu auras des données réelles via une variable d'environnement ou un fetch vers ton API Supabase (`select count(*) from profiles`).

**Correction — option C (si tu veux garder des compteurs dynamiques dès maintenant) :** connecte les compteurs à ton vrai backend avec un appel API public qui retourne les counts, et affiche "Beta lancée" à la place de "0+" tant que les chiffres sont inférieurs à 10.

---

## Problème 2 — Témoignages inventés (critique)

**Ce que voit le visiteur :** trois témoignages de Lucas M., Sophie B., et Marc D. — les mêmes prénoms et emojis que dans les mockups de l'app quelques sections plus haut.

**Pourquoi c'est destructeur :** même un visiteur qui ne fait pas consciemment le lien ressent une incohérence. Et ceux qui le remarquent perdent toute confiance dans le reste de la page. Les moteurs de recherche aussi — les faux avis nuisent au score E-E-A-T de Google.

**Correction exacte :** supprime toute la section témoignages. Remplace par un bloc "Early access" :

```
Beta ouverte

## Rejoins les premiers joueurs à Nice

Padelia est en beta ouverte. Chaque retour compte pour
façonner l'app. Sois parmi les premiers à l'utiliser
et influence directement les prochaines fonctionnalités.

[Rejoindre la beta →]

🎁 Les 100 premiers inscrits bénéficieront d'un mois
Premium offert au lancement.
```

Cela crée de l'urgence, de l'exclusivité et de l'honnêteté. Tu réintroduiras les témoignages quand tu auras de vrais retours — même un simple "Super app, j'ai trouvé un partenaire en 10 min" d'un vrai utilisateur avec son prénom vaut 100 fois plus que trois témoignages inventés.

---

## Problème 3 — Liens morts dans le footer (critique)

**État actuel :** 12 liens sur 16 dans le footer pointent vers `#`.

| Lien | Statut | Correction |
|------|--------|------------|
| Fonctionnalités | ✅ OK | `#features` |
| Tarifs | ✅ OK | `#pricing` |
| Beta | ❌ `#` | → `https://padelia-beta.vercel.app` |
| Roadmap | ❌ `#` | → supprimer ou lier à un Notion public |
| Blog | ❌ `#` | → supprimer jusqu'à avoir du contenu |
| Discord | ❌ `#` | → supprimer |
| Instagram | ❌ `#` | → créer `@padelia.app` et lier |
| Ambassadeurs | ❌ `#` | → supprimer |
| CGU | ❌ `#` | → `https://padelia-beta.vercel.app/cgu` |
| Confidentialité | ❌ `#` | → `https://padelia-beta.vercel.app/confidentialite` |
| Cookies | ❌ `#` | → `https://padelia-beta.vercel.app/confidentialite#cookies` |
| Contact | ✅ OK | `/contact` |
| Twitter | ❌ `#` | → supprimer |
| Instagram (footer bas) | ❌ `#` | → lier au compte créé |
| LinkedIn | ❌ `#` | → supprimer ou créer page entreprise |

**Correction exacte :** réduis le footer à ce qui existe réellement. Un footer honnête avec 6 liens qui marchent est infiniment mieux qu'un footer "riche" avec 12 liens cassés. Structure cible :

```
Produit                   Légal                    Contact
Fonctionnalités           CGU                      contact@padelia.app
Tarifs                    Confidentialité           Instagram
Accéder à la beta         Mentions légales
```

---

## Problème 4 — Mockup dupliqué

**Ce que voit le visiteur :** le même mockup "accueil" avec les mêmes matchs et les mêmes joueurs compatibles apparaît deux fois — dans le hero et dans la section "Conçue pour les joueurs, par des joueurs" plus bas.

**Pourquoi c'est un problème :** le visiteur qui scrolle a l'impression de revenir en haut. Ça casse le rythme narratif de la page (découverte → features → comment ça marche → preuve → conversion). Le deuxième mockup devrait montrer quelque chose de nouveau.

**Correction exacte :** remplace le deuxième mockup par un écran différent de l'app. Les meilleurs candidats, par ordre d'impact :
- L'écran tournois avec le bracket (c'est spectaculaire visuellement et aucun concurrent ne l'a)
- L'écran chat avec des messages et des réactions (prouve que c'est une vraie communauté)
- L'écran carte Mapbox avec les marqueurs de clubs (prouve la couverture géographique)

Si tu ne veux pas créer un nouveau mockup, supprime la section "Conçue pour les joueurs" entièrement — elle n'ajoute rien sans un visuel différent.

---

## Problème 5 — Pricing prématuré et mal cadré

**Ce que voit le visiteur :** un tableau avec des features barrées en gris dans la colonne gratuite — "Stats avancées" barré, "Matching illimité" barré, "Classements locaux" barré. Le message implicite est "le gratuit est limité".

**Pourquoi c'est un problème en phase beta :** tu n'as pas encore d'utilisateurs. Chaque friction supplémentaire avant l'inscription te coûte des conversions. Afficher des limitations avant que le visiteur ait testé l'app, c'est lui donner une raison de ne pas essayer.

**Correction exacte — option A (recommandée pour la beta) :** simplifie le pricing en un seul bloc :

```
Gratuit pendant la beta

Profil joueur complet · Matching intelligent · Chat illimité
Stats & progression · Tournois · Carte interactive

[Commencer gratuitement →]

Un plan Premium sera disponible au lancement avec des
fonctionnalités avancées pour les joueurs les plus engagés.
```

**Correction — option B (si tu veux garder les deux colonnes) :** ne barre pas les features du plan gratuit. Montre seulement ce que chaque plan inclut. Le visiteur fera la comparaison tout seul.

---

## Problème 6 — SEO insuffisant

**Constats :**
- Le domaine `padelia.netlify.app` n'a aucune autorité et contient "netlify" — signal d'un projet non finalisé
- La meta description dans les résultats Google est générique
- Aucun mot-clé local dans les titres de section ("padel Nice", "trouver joueur padel")
- Zéro page de contenu indexable (pas de blog, pas de guide)
- Pas d'Open Graph configuré — les partages sur les réseaux sociaux n'ont pas de preview riche

**Corrections par priorité :**

Un domaine propre : achète `padelia.fr` ou `padelia.app` (vérifie la disponibilité). Configure-le sur Netlify. C'est 10-15€/an et le signal de confiance est immédiat.

Ajoute les meta OG dans le `<head>` :
```html
<meta property="og:title" content="Padelia — Trouve ton partenaire de padel idéal">
<meta property="og:description" content="L'app qui connecte les joueurs de padel par niveau, position et style de jeu. Gratuit.">
<meta property="og:image" content="/images/og-cover.jpg">
<meta property="og:url" content="https://padelia.fr">
<meta name="description" content="App de padel gratuite pour trouver des partenaires de jeu par niveau à Nice et en France. Matching intelligent, tournois, chat et stats.">
```

Glisse des mots-clés locaux naturellement dans les titres : "Tout ce qu'il faut pour dominer le terrain" → "Tout ce qu'il faut pour jouer au padel à Nice" par exemple.

---

## Problème 7 — Formulaire contact potentiellement non fonctionnel

**Constat :** le formulaire affiche "Message envoyé !" mais c'est un site statique Netlify. Si Netlify Forms n'est pas activé ou si le formulaire n'a pas l'attribut `netlify`, les messages ne vont nulle part.

**Correction exacte :** vérifie dans le dashboard Netlify → Forms si les soumissions arrivent. Si ce n'est pas le cas, ajoute `data-netlify="true"` au `<form>` et `name="contact"`. Netlify interceptera les soumissions et te les enverra par email. Alternative : branche le formulaire sur un endpoint Resend ou un webhook vers ton email.

---

## Résumé priorisé

| Priorité | Action | Effort |
|----------|--------|--------|
| P0 | Retirer compteurs à zéro | 5 min |
| P0 | Retirer faux témoignages → section "Beta ouverte" | 30 min |
| P0 | Corriger les liens footer (CGU, Confidentialité, supprimer les morts) | 20 min |
| P1 | Remplacer le mockup dupliqué | 1h |
| P1 | Simplifier le pricing pour la beta | 30 min |
| P2 | Acheter un domaine propre + config OG | 1h |
| P2 | Vérifier le formulaire contact | 10 min |

Les trois P0 sont faisables en moins d'une heure et éliminent les éléments qui nuisent activement à ta conversion.