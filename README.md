# Plano de Teste
Sistema de gerenciamento dos Planos Educacionais Individualizados para alunos com necessidades educacionais específicas (PEIs).

## Alunos
- José Matheus Bento
- Michael Cesar Fernades Lopes
- Yasmin Carvalho Targino de Alencar

## Casos de teste


| ID  | Descrição (Nome do Teste) | Roteiro | Resultado Esperado | Valores de Entrada | Resultado do Teste|
| --- | --------------------------|---------| -------------------| ------------------ | ----------------- |
| 1   | Teste de Login Professor | Realizar o login com um email e senha válidos para o professor.| O usuário é redirecionado para a página inicial (dashboard). | Email: `tester_professor@gmail.com`, Senha: `123deoliveira4` | Teste aprovado  |
| 2   | Teste de Login Coordenador | Realizar o login com um email e senha válidos para o coordenador. | O usuário é redirecionado para a página inicial (dashboard).| Email: `tester_coordinator@gmail.com`, Senha: `123deoliveira4` | Teste aprovado  |
| 3   | Teste de Cadastro de Curso - Todos os campos válidos | Registrar um curso com todos os campos válidos preenchidos. | O curso é registrado com sucesso e a mensagem de sucesso é exibida.  | Nome: "Curso teste grupo 6", Período: "MORNING", Número de períodos: "7", Tipo de duração: "SEMESTER", Tipo de curso: "Curso Superior de Tecnologia" | Teste aprovado  |
| 4   | Teste de Cadastro de Curso - Sem o campo de nome | Tentar registrar um curso sem preencher o campo de nome.| O sistema exibe a mensagem de erro para o campo de nome obrigatório.  | Período: "MORNING", Número de períodos: "7", Tipo de duração: "SEMESTER", Tipo de curso: "Curso Superior de Tecnologia" | Teste aprovado   |
| 5   | Teste de Cadastro de Curso - Sem a duração do curso | Tentar registrar um curso sem preencher o campo de duração.| O sistema exibe a mensagem de erro para o campo de duração obrigatório. | Nome: "Curso teste grupo 6", Período: "MORNING", Número de períodos: "7", Tipo de duração: "SEMESTER", Tipo de curso: "Curso Superior de Tecnologia" | Teste aprovado  |
| 6   | Teste de Cadastro de Curso - Quantidade de tempo por duração - Semestral | Registrar um curso com duração semestral e verificar o número de períodos. | O campo de número de períodos deve ser preenchido com o valor 7.      | Nome: "Curso teste grupo 6", Período: "MORNING", Número de períodos: "7", Tipo de duração: "SEMESTER", Tipo de curso: "Curso Superior de Tecnologia" | Teste aprovado  |
| 7   | Teste de Cadastro de Curso - Quantidade de tempo por duração - Anual | Registrar um curso com duração anual e verificar o número de períodos.  | O campo de número de períodos deve ser preenchido com o valor 4. | Nome: "Curso teste grupo 6", Período: "MORNING", Número de períodos: "7", Tipo de duração: "YEAR", Tipo de curso: "Curso Superior de Tecnologia" | Teste aprovado   |
| 8   | Teste de Cadastro de Disciplina - Todos os campos nulos | Tentar registrar uma disciplina sem preencher nenhum campo. | O sistema exibe a mensagem de erro para os campos obrigatórios. | Nenhum campo preenchido. | Teste aprovado  |
| 9   | Teste de Cadastro de Disciplina - Todos os campos válidos | Registrar uma disciplina com todos os campos válidos preenchidos. | A disciplina é registrada com sucesso e a mensagem de sucesso é exibida. | Nome da disciplina: "Informática Básica", Curso: "Curso teste grupo 6", Metodologia, Objetivo, Conteúdo e Avaliações preenchidos. | Teste aprovado |
| 10  | Teste de Cadastro de Oferta - Todos os campos válidos  | Registrar uma oferta com todos os campos válidos preenchidos. | A oferta é registrada com sucesso e a mensagem de sucesso é exibida.  | Curso: "Curso teste grupo 6 - Matutino", Disciplina: "Informática Básica", Professor: "Professor Grupo 6", Status: "Aberta", Ano: 2025, Semestre: "1" | Teste aprovado  |
| 11  | Teste de Filtros de Disciplinas - Filtrar por nome não existente | Tentar filtrar disciplinas usando um nome que não existe. | O sistema exibe a mensagem "Nenhuma disciplina encontrada". | Nome do filtro: "inexistente" | Teste reprovado - aparece o texto `Nenhuma disciplina cadastrada.` onde deveria aparece `Nenhuma disciplina encontrada.` |
| 12  | Teste de Filtros de Disciplinas - Filtrar por nome existente | Filtrar disciplinas usando um nome que existe. | O sistema exibe a disciplina filtrada.  | Nome do filtro: "Informática Básica" |  Teste aprovado  |
| 13  | Teste de Filtros de Disciplinas - Filtrar por curso    | Filtrar disciplinas por curso. | O sistema exibe as disciplinas do curso filtrado. | Curso do filtro: "Curso teste grupo 6 - Matutino" |  Teste aprovado  |
| 14  | Teste de Filtros de Disciplinas - Filtrar por duração  | Filtrar disciplinas por tipo de duração. | O sistema exibe as disciplinas com o tipo de duração filtrado. | Tipo de duração do filtro: `SEMESTER` |  Teste aprovado  |
| 15  | Teste de Cadastro de Docentes - Todos os campos nulos  | Tentar cadastrar um docente sem preencher nenhum campo. | O sistema exibe a mensagem de erro para os campos obrigatórios. | Nenhum campo preenchido. | Teste aprovado  |
| 16  | Teste de Cadastro de Docentes - Todos os campos válidos | Cadastrar um docente com todos os campos válidos preenchidos. | O docente é cadastrado com sucesso e a mensagem de sucesso é exibida.   | Foto: 'cypress/fixtures/image.png', Nome: "Professor Grupo 6", Matrícula: "20221094040070", Campus: "Pau dos Ferros", E-mail: `grupo6@email.com` | Teste aprovado |
| 17  | Teste de Cadastro de Docentes - E-mail já existente    | Tentar cadastrar um docente com um e-mail já existente.                                                   | O sistema exibe a mensagem de erro para o e-mail existente. | Foto: 'cypress/fixtures/image.png', Nome: "Professor Grupo 6", Matrícula: "20221094040070", Campus: "Pau dos Ferros", E-mail: `grupo6@email.com` | Teste aprovado |
| 18  | Teste de Cadastro de Docentes - Matrícula já existente | Tentar cadastrar um docente com uma matrícula já existente. | O sistema exibe a mensagem de erro para a matrícula existente.  | Foto: 'cypress/fixtures/image.png', Nome: "Professor Grupo 6", Matrícula: "20221094040070", Campus: "Pau dos Ferros", E-mail: `grupo6@email.com` | Teste aprovado |
| 19  | Teste de Cadastro de Docentes - Docente sem foto       | Tentar cadastrar um docente sem fornecer uma foto. | O sistema exibe a mensagem de erro para o campo de foto obrigatório. | Nome: "Professor Grupo 6", Matrícula: "20221094040070", Campus: "Pau dos Ferros", E-mail: `grupo6@email.com` | Teste reprovado - É possível cadastrar um docente sem foto |
| 20  | Teste de Cadastro de Discentes - Todos os campos válidos | Registrar um discente com todos os campos válidos preenchidos. | O discente é registrado com sucesso e a mensagem de sucesso é exibida. | Nome: "Aluno Teste 6", E-mail: `grupo6@email.com`, Matrícula: `20221094040070`, Foto: `cypress/fixtures/image.png` | Teste aprovado |
| 21  | Teste de Cadastro de Discentes - E-mail já existente   | Tentar cadastrar um discente com um e-mail já existente. | O sistema exibe a mensagem de erro para o e-mail existente. | Nome: "Aluno Teste 6", E-mail: `grupo63@email.com`, Matrícula: `17391386664963`, Foto: `cypress/fixtures/image.png` | Teste aprovado |
| 22  | Teste de Cadastro de Discentes - Matrícula já existente | Tentar cadastrar um discente com uma matrícula já existente. | O sistema exibe a mensagem de erro para a matrícula existente. | Nome: "Aluno Teste 6", E-mail: `grupo6${Date.now()}@email.com`, Matrícula: `20221094040070`, Foto: `cypress/fixtures/image.png` | Teste reprovado - É possível criar mais de 1 discente com a mesma matrícula  |
| 23  | Teste de Excluir Discente - Excluir Aluno Associado a uma oferta | Tentar excluir um aluno que está associado a uma oferta. | O sistema exibe a mensagem "Não é possível excluir o aluno, pois ele possui ofertas associadas." | Aluno: "Aluno Teste 6" | Teste aprovado |
| 24  | Teste de Excluir Discente - Excluir Aluno | Excluir um aluno que não está associado a nenhuma oferta. | O sistema exibe a mensagem de sucesso "O aluno foi excluído com sucesso." | Aluno: `"Aluno Teste 6"` | Teste aprovado |
| 25  | Excluir Docente | Buscar professor "Professor Grupo 6", tentar excluí-lo. | "O professor foi excluído com sucesso."| Nome: "Professor Grupo 6" | Teste aprovado |
| 26  | Excluir Docente associado a uma oferta  | Buscar professor "Professor Tester", tentar excluí-lo enquanto associado a uma oferta. | "O professor não pode ser excluído pois está associado a alguma oferta." | Nome: "Professor Tester"  | Teste reprovado - invés de aparecer uma mensagem de erro, o site redireciona para a tela de erro 500, não informando de maneira claro o que aconteceu. |
| 27  | Gerar PEI  | 1. Acessar a página https://pei-hmg.nadic.ifrn.edu.br/academics/offers/detail/{id}/ de uma oferta cadastrada anteriormente e com alunos disponiveis no curso da oferta<br>2. Digitar nome de um discente<br>3. Clicar em Incluir <br>4. Voltar a tela inicial https://pei-hmg.nadic.ifrn.edu.br/ e verificar o último PEIs Criado| Aparecer o novo PEI na listagem da Home | Selecionar "Aluno Teste 6" | Teste aprovado |
| 28  | Visualizar PEI - Professor | Login como "tester_professor@gmail.com", clicar no primeiro link de PEI. | "Detalhes do PEI" | Login: "tester_professor@gmail.com" | Teste aprovado |
| 29  | Editar PEI - Professor   | 1. Na tela inicial clicar em editar<br>2. Preencher campos adaptados<br>3. salvar | "O PEI foi atualizado com sucesso." | Objetivos Adaptados, Conteúdos Adaptados, Metodologias Adaptadas, Recursos didáticos adaptados, Avaliações Adaptadas. | Teste aprovado |
| 30  | Adicionar Parecer - Professor  | 1. Na tela inicial clicar em editar<br>2. clicar em pareces<br>3. adicionar um parecer<br>4. salvar| "O PEI foi atualizado com sucesso." | Status: "Preenchido", Parecer: "Primeiro Parecer" | Teste aprovado |
| 31  | Comentar PEI - Coordenador  | Como Coordenador poder comentar no PEI | Aparecer mensagem: Comentário adicionado com sucesso | "Comentário teste" | Teste aprovado |



## Relatório de Resumo de Teste
| | Relatório de Resumo de Teste |
|-----| ------ |
|Nome do projeto: | Sistema de gerenciamento dos Planos Educacionais Individualizados para alunos com necessidades educacionais específicas (PEIs). | 
| Data início teste: | 07/02/2025 |
| Data fim teste: | 09/02/2025|
|Descrição| Com a criação dos casos de teste previamente facilitou a detecção principalmente em cadastros importantes como registrar discente.| 
|Pessoas envolvidas |  José Matheus Bento, Michael Cesar Fernades Lopes e Yasmin Carvalho Targino de Alencar |
|Casos de testes criados antes do teste | 26 |
|Casos de testes criados durante o teste | 5 |
| Casos de testes executados | 31 |
| Casos de teste com sucesso | 27 |
| Casos de teste com sucesso | 4 |
|  Percentual | |
| Casos de testes executados | 100% | 
| Casos de testes executados com sucesso| |
|Casos de testes com incidência de erro | |
