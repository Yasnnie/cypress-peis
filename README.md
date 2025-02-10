## Quality Assurance - PEI - Plano Educacional Individualizado

### Erros
- O botão "Voltar" na tela para "Cadastrar Novo Curso" não funciona; ele está como um botão para criar um novo curso.

---

#### Fluxos Críticos:

| Fluxo                        | Descrição                                                                                  |
|-------------------------------|--------------------------------------------------------------------------------------------|
| **Criação de cursos**          | Um coordenador deve conseguir criar um curso para usá-lo futuramente no sistema.            |
| **Manipulação dos cursos**     | Um coordenador deve ser capaz de manipular os dados referentes a um curso: listar, editar e excluir. |
| **Criação de disciplinas**     | Um coordenador deve conseguir criar uma disciplina para usá-la futuramente no sistema.      |
| **Manipulação de disciplinas** | Um coordenador deve ser capaz de manipular os dados referentes a uma disciplina: listar, editar e excluir. |
| **Cadastro de ofertas**        | Um coordenador deve conseguir cadastrar ofertas de disciplinas para os cursos.             |

---

#### Coordinator

##### Cursos

###### Criando Novo Curso

| Cenário                           | Entradas                                                                              | Resultado Esperado                                                                 |
|-----------------------------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Entrando com todos os campos válidos** | Nome: "Curso teste grupo 6", Turno: "Matutino", Qtd. Períodos: 7, Duração: "Semestral", Tipo: "Curso superior de tecnologia" | O curso deverá ser criado com sucesso.                                             |
| **Entrando com um campo ausente**  | Nome: "", Turno: "Matutino", Qtd. Períodos: 8, Duração: "Semestral", Tipo: "Curso superior de tecnologia" | O curso não deverá ser criado e uma mensagem informando que o preenchimento de todos os campos é necessário deverá ser exibida. |
| **Entrando com um campo ausente**  | Nome: "", Turno: "Matutino", Qtd. Períodos: 8, Duração: "", Tipo: "Curso superior de tecnologia" | O curso não deverá ser criado e uma mensagem informando que o preenchimento de todos os campos é necessário deverá ser exibida. |

###### Filtros para Cursos

####### Filtros por turno

| Cenário de Teste                          | Entrada (Filtro)                    | Resultado Esperado                                                                 |
|-------------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------|
| **Filtrando por turno**                   | Turno: ""                           | Exibir todos os cursos, independente de seus turnos. |
| **Filtrando por turno**                   | Turno: "Matutino"                           |  O sistema deverá exibir todos os cursos correspondentes ao turno. |
| **Filtrando por turno**                   | Turno: "Vespertino"                           | :O sistema deverá exibir todos os cursos correspondentes ao turno. |
| **Filtrando por turno**                   | Turno: "Noturno"                           | O sistema deverá exibir todos os cursos correspondentes ao turno. |


###### Filtros por tipo de curso

| Cenário de Teste                          | Entrada (Filtro)                    | Resultado Esperado                                                                 |
|-------------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------|
| **Filtrando por tipo de curso**           | Tipo de curso: ""                   | O sistema deverá exibir todos os cursos independente de seu tipo.|
| **Filtrando por tipo de curso**           | Tipo de curso: "Curso Superior de Tecnologia"   |  O sistema deverá exibir todos os cursos do tipo correspondente a entrada.|
| **Filtrando por tipo de curso**           | Tipo de curso: "Outros"                   | O sistema deverá exibir todos os cursos correspondentes a entrada. |


###### Filtros por turno e tipo de curso

| Cenário de Teste                          | Entrada (Filtro)                    | Resultado Esperado                                                                 |
|-------------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------|
| **Filtrando por turno e tipo de curso**   | Turno: "", Tipo de curso: "" | O sistema deverá exibir todos os cursos. |
| **Filtrando por turno e tipo de curso**   | Turno: "", Tipo de curso: "Engenharia" | O sistema deverá exibir todos os cursos do tipo “Engenharia” independente de seu turno. |
| **Filtrando por turno e tipo de curso**   | Turno: "Matutino", Tipo de curso: "" | O sistema deverá exibir todos os cursos do turno “Matutino” independentemente de seu tipo. |


###### Filtrando por nome na barra de pesquisa

| Cenário de Teste                          | Entrada (Filtro)                    | Resultado Esperado                                                                 |
|-------------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------|
| **Filtrando por turno e tipo de curso**   | Pesquisa: "" | O sistema deverá exibir todos os cursos. |
| **Filtrando por turno e tipo de curso**   | Pesquisa: "Alimentos" | O sistema deverá exibir todos os cursos correspondentes a entrada. |
| **Filtrando por turno e tipo de curso**   | Pesquisa: "A"  | O sistema deverá exibir todos os cursos que contenham em seu nome o caractere informado na barra de pesquisa. |
| **Filtrando por turno e tipo de curso**   | Pesquisa: "Alimentos Técnico Integrado Michael"  |  O sistema não deverá exibir nenhum curso, uma vez que a entrada maior e com “Michael” que não é esperado e nem corresponde a nenhum curso está presente na string de pesquisa. |

###### Botões de Ação: Visualizar, Editar, Excluir

| Ação                                     | Entrada                          | Resultado Esperado                                                                         |
|------------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------|
| **Clicar no ícone de olho**              | -                                | O sistema deverá exibir os detalhes desse curso e suas disciplinas.                              |
| **Clicar no ícone de edição**            | -                                | O sistema deverá exibir um formulário com os campos do curso permitindo a edição dos dados.      |
| **Clicar no ícone de lixeira**           | -                                | O sistema deverá exibir um modal de confirmação perguntando ao usuário se ele realmente deseja excluir o curso, ao confirmar, o curso deverá ser excluído. |

---


