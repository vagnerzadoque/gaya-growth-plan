# 🚀 Guia de Deploy - GitHub Pages

## 📋 Configuração do Repositório

### 1. Ativar GitHub Pages

1. **Acesse o repositório no GitHub**
2. **Vá para Settings** (aba superior)
3. **Role para baixo até "Pages"**
4. **Em "Source", selecione "GitHub Actions"**
5. **Salve as configurações**

### 2. Configurar Permissões

1. **Vá para Settings → Actions → General**
2. **Em "Workflow permissions", selecione "Read and write permissions"**
3. **Marque "Allow GitHub Actions to create and approve pull requests"**
4. **Salve as configurações**

## 🔄 Deploy Automático

### Como funciona

- **Push para `main`**: Deploy automático do Storybook
- **Criação de Release**: Publicação no NPM

### Verificar Deploy

1. **Vá para a aba "Actions"**
2. **Verifique se o workflow "Deploy Storybook and Publish to NPM" está rodando**
3. **Aguarde a conclusão (pode levar alguns minutos)**
4. **Acesse: `https://vagnerzadoque.github.io/Gaya-growthplan/`**

## 🛠️ Comandos Úteis

### Build Local
```bash
# Build do Storybook
npm run build-storybook

# Build da biblioteca
npm run build

# Build dos ícones
npm run build:icons
```

### Teste Local
```bash
# Iniciar Storybook
npm run storybook

# Preview do build
npm run preview
```

## 🐛 Troubleshooting

### Deploy não aparece
- Verificar se o workflow rodou com sucesso
- Verificar permissões do GitHub Actions
- Aguardar alguns minutos para propagação

### Build falha
- Verificar se todos os imports estão corretos
- Verificar se não há erros de TypeScript
- Testar build local primeiro: `npm run build-storybook`

### Caminhos quebrados
- Verificar se o repositório está configurado corretamente
- Verificar se o nome do repositório está correto no `package.json`

## 📚 URLs Importantes

- **Storybook**: https://vagnerzadoque.github.io/Gaya-growthplan/
- **Repositório**: https://github.com/vagnerzadoque/Gaya-growthplan
- **Issues**: https://github.com/vagnerzadoque/Gaya-growthplan/issues

## ✅ Checklist de Deploy

- [ ] GitHub Pages ativado
- [ ] Permissões configuradas
- [ ] Workflow rodando com sucesso
- [ ] Storybook acessível
- [ ] Links funcionando
- [ ] Documentação atualizada
