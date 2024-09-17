module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      surgeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'patient_surgeries',
    }
  );

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgery',
      through: PatientSurgery,
      foreignKey: 'surgeryId', // se refere ao id de surgery na tabela de `patient_surgeries`
      otherKey: 'patientId', // se refere a outra chave de `surgeries`
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patient',
      through: PatientSurgery,
      foreignKey: 'patientId', // se refere ao id de patient na tabela de `patient_surgeries`
      otherKey: 'surgeryId',
    });
  };

  return PatientSurgery;
};