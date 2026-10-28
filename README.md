# Courses

Cursos de estudo para prova, no formato de um cartão por tela: conceito curto, prática com retorno imediato,
XP, erros que voltam no fim da aula e um desafio escrito no fim de cada aula. Feitos para as AV1 da
Link School of Business (Administração, 2026).

| Curso | Endereço | O que cobre |
|---|---|---|
| Contabilidade Gerencial em 1 dia | `index.html?curso=contabilidade` | matemática financeira, balanço, DRE, DFC, análise vertical e horizontal, rentabilidade, liquidez, tributos e simulado |
| People Skills para a AV1 (cerca de 1 hora) | `index.html?curso=people` | autoconhecimento, valores, a sua folha de consulta (SWOT, cruzamentos e as 3 lentes), equação da motivação, emoções, perfis, as 3 perguntas do cérebro, rede padrão, effectuation, respostas-modelo das dissertativas e um banco extra de 82 questões |

---

## 1. O que você precisa

| Ferramenta | Para quê | Obrigatória? |
|---|---|---|
| **Git** | baixar o repositório | sim |
| **uv** | rodar o servidor em Python (ele instala o Python 3.11+ sozinho) | sim |
| **Um navegador** (Chrome, Safari, Edge, Firefox) | abrir o curso | sim |
| **Claude Code** (comando `claude`), logado numa conta Claude | correção automática dos desafios escritos e o chat de dúvidas | não: sem ele o curso funciona, e o desafio mostra a resposta comentada para você se avaliar |

O curso não usa nenhuma biblioteca Python além da biblioteca padrão. O `pytest` só é usado para os testes, e o
`uv` instala ele sozinho.

---

## 2. Instalação do zero

Abra o **Terminal** (macOS e Linux) ou o **PowerShell** (Windows) e siga os passos do seu sistema. Depois de
instalar cada ferramenta, **feche e abra o terminal de novo** para ele enxergar o comando novo.

### 2.1 Git

- **macOS:** rode `git --version`. Se ele não existir, o macOS oferece instalar as ferramentas de linha de
  comando: aceite. Ou instale direto:

  ```bash
  xcode-select --install
  ```

- **Windows:**

  ```powershell
  winget install --id Git.Git -e
  ```

- **Linux (Ubuntu ou Debian):**

  ```bash
  sudo apt update && sudo apt install -y git
  ```

Confira com `git --version`.

### 2.2 uv

- **macOS e Linux:**

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  (no macOS, com Homebrew, também serve `brew install uv`)

- **Windows:**

  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

Confira com `uv --version`. Você **não** precisa instalar o Python: o `uv` baixa uma versão compatível na
primeira vez que rodar.

### 2.3 Baixar o repositório

```bash
git clone https://github.com/theomourac/courses.git
cd courses
uv sync
```

O `uv sync` cria o ambiente (`.venv/`), baixa o Python se faltar e instala o `pytest`. Ele só precisa rodar
uma vez; o `uv run` dos próximos passos também faz isso sozinho se for preciso.

### 2.4 Ligar o curso

Ainda dentro da pasta `courses`:

```bash
uv run python curso/tools/servidor.py --porta 8765
```

O terminal mostra `Curso em http://localhost:8765 ...`. Deixe essa janela aberta enquanto estuda (para desligar:
`Ctrl+C`). Abra no navegador:

- Contabilidade: http://localhost:8765/index.html?curso=contabilidade
- People Skills: http://localhost:8765/index.html?curso=people

Pronto: o curso já funciona. A correção automática é o passo seguinte, opcional.

### 2.5 (Opcional) Correção automática com o Claude Code

Os desafios escritos de cada aula são corrigidos, passo a passo, por um modelo do Claude chamado pelo comando
`claude`. Para isso, você precisa do Claude Code instalado e **logado**.

1. Instale:

   - **macOS, Linux e WSL:**

     ```bash
     curl -fsSL https://claude.ai/install.sh | bash
     ```

   - **Windows (PowerShell):**

     ```powershell
     irm https://claude.ai/install.ps1 | iex
     ```

   - Alternativa em qualquer sistema, se você já tem o Node.js 18 ou mais novo:

     ```bash
     npm install -g @anthropic-ai/claude-code
     ```

2. Faça o login: rode `claude` uma vez, siga as instruções no navegador com a sua conta Claude (assinatura
   Pro/Max ou conta do Console) e saia com `/exit`.

3. Teste:

   ```bash
   claude -p "responda só: ok"
   ```

   Se aparecer `ok`, está funcionando.

4. Reinicie o servidor (`Ctrl+C` e rode o comando do passo 2.4 de novo).

O servidor usa o **login do Claude Code**, não uma chave de API: ele ignora a variável `ANTHROPIC_API_KEY` de
propósito. A correção usa o modelo `haiku` e o chat de dúvidas usa o `sonnet` (veja a seção 3 para trocar).

---

## 3. Uso no dia a dia

| Quero… | Faça |
|---|---|
| ligar o curso | `uv run python curso/tools/servidor.py --porta 8765` |
| usar outra porta (a 8765 está ocupada) | troque o número: `--porta 8800` |
| saber onde fica o meu progresso | num arquivo SQLite em `~/.curso-agente-analista/progresso.sqlite`. Ele sobrevive a limpar o navegador e a trocar de porta |
| guardar o progresso em outro arquivo | `CURSO_DB=/caminho/progresso.sqlite uv run python curso/tools/servidor.py` (no PowerShell: `$env:CURSO_DB="C:\caminho\progresso.sqlite"` antes do comando) |
| trocar o modelo da correção ou do chat | `CURSO_MODELO=sonnet` ou `CURSO_MODELO_CHAT=opus` antes do comando |
| pular entre as aulas sem seguir a ordem | na trilha, ligue **Liberar todas** |
| estudar sem servidor | abra `curso/index.html` direto no navegador. Funciona, mas sem correção automática nem chat, e o progresso fica só nesse navegador |

---

## 4. Problemas comuns

| Sintoma | Causa e solução |
|---|---|
| `uv: command not found` ou `git: command not found` | o terminal foi aberto antes da instalação. Feche e abra de novo; se continuar, refaça o passo 2.1 ou 2.2 |
| `Address already in use` ao ligar o servidor | já há um servidor nessa porta (talvez outra janela do terminal). Desligue o outro ou use `--porta 8800` |
| a página abre em branco ou sem aulas | confira se abriu `http://localhost:8765/...` (com o servidor ligado) e não um endereço de arquivo antigo |
| "A correção automática não respondeu agora" | o `claude` não está instalado, não está logado ou está sem acesso. Teste com `claude -p "responda só: ok"` (passo 2.5) e reinicie o servidor |
| a correção demora | é normal levar de 10 a 30 segundos por desafio na primeira vez. Respostas iguais ficam guardadas em `.tmp/` e voltam na hora |

---

## 5. Como o projeto é organizado

- `curso/assets/`: a plataforma (trilha, player, diagramas, ilustrações, estilo claro e escuro, celular).
- `curso/cursos.js`: a lista de cursos. Cada curso tem a sua pasta de aulas e a sua chave de progresso.
- `curso/<curso>/aulas/aula-NN.js`: uma aula por arquivo, só dados (JSON). O `indice.js` monta a trilha.
- `curso/<curso>/BRIEFING-CODEX.md` e `CURRICULO.md`: as regras de escrita e a ficha de cada aula.
- `curso/<curso>/fontes/`: o material de estudo de onde as aulas saíram.
- `curso/tools/servidor.py`: o servidor local (páginas, progresso, correção e chat). Só aceita conexões da
  própria máquina (`127.0.0.1`).
- `curso/tools/check_aula_ctb.py` e `check_aula_ps.py`: os verificadores de cada curso (formato, limites de
  texto, contas conferidas, termo explicado antes de ser usado, questão do simulado usada uma vez só).

## 6. Verificar e testar (para quem for editar as aulas)

```bash
uv run python curso/tools/check_aula_ps.py curso/people/aulas/aula-*.js
uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-*.js
uv run pytest -q
```

Cada verificador sai com `0 erro(s)` quando a aula segue as regras; cada linha de `ERRO` diz o que corrigir.
