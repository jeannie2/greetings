import getTemplates from '@/lib/getTemplates'

export default (req, res) => {
  const { data, error } = getTemplates()

  if (error) return res.status(400).json(error)

  return res.json(data)
}
